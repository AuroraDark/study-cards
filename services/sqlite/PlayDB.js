import db from "./SQLiteDatabase";
import CardDB from "./Card";
/*
- cardId
- categoryId
- status
*/

// STATUS = 0 -> Card não visto
// STATUS = 1 -> Card foi respondido como ERRADO na ultima vez visto
// STATUS = 2 -> Card foi respondido como CERTO na ultima vez visto
// ESPAÇO = Quantidade de jogadas desde a ultima vez visto

/**
 * INICIALIZAÇÃO DA TABELA
 * - Executa sempre, mas só cria a tabela caso não exista (primeira execução)
 */
db.transaction((tx) => {
  tx.executeSql(
    // "CREATE TABLE play ( id INTEGER PRIMARY KEY AUTOINCREMENT, cardId INTEGER, categoriaId INTEGER, status INTEGER, espaco INTEGER, UNIQUE(cardId))"
    "CREATE TABLE IF NOT EXISTS play ( id INTEGER PRIMARY KEY AUTOINCREMENT, cardId INTEGER, categoriaId INTEGER, status INTEGER, views INTEGER, erros INTEGER, espaco INTEGER,  UNIQUE(cardId))"
  );
});

/**
 * CRIAÇÃO DE UM NOVO REGISTRO
 * - Recebe um objeto;
 * - Retorna uma Promise:
 *  - O resultado da Promise é o ID do registro (criado por AUTOINCREMENT)
 *  - Pode retornar erro (reject) caso exista erro no SQL ou nos parâmetros.
 */
const createPlay = (categoriaId) => {
  return new Promise((resolve, reject) => {
    // puxando todos os cards da categoria
    CardDB.allCardsCategory(categoriaId, "").then((res) => {
      db.transaction((tx) => {
        // setando nova jogada para cada card que não foi setado
        for (let obj of res) {
          tx.executeSql(
            "INSERT OR IGNORE INTO play (cardId, categoriaid, status, views, erros, espaco) VALUES (?, ?, 0, 0, 0, 1);",
            [obj.id, obj.categoriaId],
            //-----------------------
            (_, { rowsAffected, insertId }) => {
              if (rowsAffected > 0) resolve(insertId);
              else resolve("Card existe"); // insert falhou
            },
            (_, error) => resolve(rowsAffected) // erro interno em tx.executeSql
          );
        }
      });
    });
  });
};

/**
 * ATUALIZA UM REGISTRO JÁ EXISTENTE
 * - Recebe o ID do registro e um OBJETO com valores atualizados;
 * - Retorna uma Promise:
 *  - O resultado da Promise é a quantidade de registros atualizados;
 *  - Pode retornar erro (reject) caso o ID não exista ou então caso ocorra erro no SQL.
 */
const updatePlay = (cardId, categoriaId, status) => {
  return new Promise((resolve, reject) => {
    if (status == 2) {
      db.transaction((tx) => {
        //comando SQL modificável
        tx.executeSql(
          "UPDATE play SET status = 2, views = views + 1 WHERE cardid = ?;",
          [cardId],
          //-----------------------
          (_, { rowsAffected }) => {
            if (rowsAffected > 0) resolve(rowsAffected);
            else reject("Error updating obj: id=" + id); // nenhum registro alterado
          },
          (_, error) => reject(error) // erro interno em tx.executeSql
        );
      });
    } else {
      db.transaction((tx) => {
        //comando SQL modificável
        tx.executeSql(
          "UPDATE play SET status = 1, views = views + 1, erros = erros + 1, espaco = espaco + 1 WHERE cardid = ?;",
          [cardId],
          //-----------------------
          (_, { rowsAffected }) => {
            if (rowsAffected > 0) resolve(rowsAffected);
            else reject("Error updating obj: id=" + id); // nenhum registro alterado
          },
          (_, error) => reject(error) // erro interno em tx.executeSql
        );
      });
    }

    db.transaction((tx) => {
      //comando SQL modificável
      tx.executeSql(
        "UPDATE play SET espaco = 1 WHERE cardid = ?",
        [cardId],
        //-----------------------
        (_, { rowsAffected }) => {
          if (rowsAffected > 0) resolve(rowsAffected);
          else reject("Error updating obj: id=" + id); // nenhum registro alterado
        },
        (_, error) => reject(error) // erro interno em tx.executeSql
      );
    });

    db.transaction((tx) => {
      //comando SQL modificável
      tx.executeSql(
        "UPDATE play SET espaco = espaco + 1 WHERE cardid != ? AND categoriaid = ?;",
        [cardId, categoriaId],
        //-----------------------
        (_, { rowsAffected }) => {
          if (rowsAffected > 0) resolve(rowsAffected);
          else reject("Error updating obj: id=" + id); // nenhum registro alterado
        },
        (_, error) => reject(error) // erro interno em tx.executeSql
      );
    });
  });
};

/**
 * ATUALIZA UM REGISTRO JÁ EXISTENTE
 * - Recebe o ID do registro e um OBJETO com valores atualizados;
 * - Retorna uma Promise:
 *  - O resultado da Promise é a quantidade de registros atualizados;
 *  - Pode retornar erro (reject) caso o ID não exista ou então caso ocorra erro no SQL.
 */
const resetaPlay = (categoriaId) => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      //comando SQL modificável
      tx.executeSql(
        "UPDATE play SET status = 0, views = 0, erros = 0, espaco = 1 WHERE categoriaId = ?;",
        [categoriaId],
        //-----------------------
        (_, { rowsAffected }) => {
          if (rowsAffected > 0) resolve(rowsAffected);
          else reject("Error updating obj: id=" + categoriaId); // nenhum registro alterado
        },
        (_, error) => reject(error) // erro interno em tx.executeSql
      );
    });
  });
};

const verificaJogadasNaoIniciadas = (id) => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      //comando SQL modificável
      tx.executeSql(
        "SELECT COUNT(VIEWS) as nao_iniciados FROM play WHERE views = 0 AND categoriaId = ?;",
        [id],
        //-----------------------
        (_, { rows }) => {
          if (rows.length > 0) resolve(rows._array[0]);
          else reject("Obj not found: id=" + id); // nenhum registro encontrado
        },
        (_, error) => reject(error) // erro interno em tx.executeSql
      );
    });
  });
};

const removePlaysCard = (id) => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      //comando SQL modificável
      tx.executeSql(
        "DELETE FROM play WHERE cardId=?;",
        [id],
        //-----------------------
        (_, { rowsAffected }) => {
          resolve(rowsAffected);
        },
        (_, error) => reject(error) // erro interno em tx.executeSql
      );
    });
  });
};

const removePlaysCategoria = (id) => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      //comando SQL modificável
      tx.executeSql(
        "DELETE FROM play WHERE categoriaId=?;",
        [id],
        //-----------------------
        (_, { rowsAffected }) => {
          resolve(rowsAffected);
        },
        (_, error) => reject(error) // erro interno em tx.executeSql
      );
    });
  });
};

const selectNextCard = (id) => {
  return new Promise((resolve, reject) => {
    verificaJogadasNaoIniciadas(id).then((res) => {
      if (res.nao_iniciados > 0) {
        db.transaction((tx) => {
          //comando SQL modificável
          tx.executeSql(
            "SELECT cardId FROM play WHERE views = 0 AND categoriaId = ? ORDER BY cardId LIMIT 1;",
            [id],
            //-----------------------
            (_, { rows }) => {
              if (rows.length > 0) resolve(rows._array[0]);
              else reject("Obj not found: id=" + id); // nenhum registro encontrado
            },
            (_, error) => reject(error) // erro interno em tx.executeSql
          );
        });
      } else {
        db.transaction((tx) => {
          //comando SQL modificável
          tx.executeSql(
            "SELECT cardid, status, erros, views, espaco, ((((erros * 1.00) / views) + 1 + (0.5 / status)) * (espaco * 1.00)) as peso FROM play WHERE categoriaId = ? ORDER BY peso DESC;",
            [id],
            //-----------------------
            (_, { rows }) => {
              if (rows.length > 0) resolve(rows._array[0]);
              else reject("Obj not found: id=" + id); // nenhum registro encontrado
            },
            (_, error) => reject(error) // erro interno em tx.executeSql
          );
        });
      }
    });
  });
};

// Atualizar Status

// Finalizar jogo

// Selecionar proxima carta

export default {
  createPlay,
  resetaPlay,
  updatePlay,
  removePlaysCard,
  removePlaysCategoria,
  selectNextCard,
};
