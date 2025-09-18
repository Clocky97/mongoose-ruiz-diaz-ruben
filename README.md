-colecciones

User tiene referencia 1:1 a Profile y referencia 1:N a Post.

Profile pertenecea los datos personales de un usuario (referenciado).

Post pertenece a un usuario (1:N) y puede tener muchos tags (N:M).

Tag tiene relación N:M con Post.

-Usos de embebido y referenciado

Embebido: sirve cuando los datos siempre se consultan juntos y no se reutilizan. Ejemplo: configuraciones dentro de un User.

Referenciado: use referencias porque necesito relaciones claras (1:1, 1:N, N:M) y para aplicar populate.

-Populate desde colecciones

Se puede usar virtual populate para vincular documentos aunque uno de ellos no tenga un campo de referencia directo.

es para consultar datos relacionados sin modificar la estructura del esquema.

eliminaciones lógicas y en cascada

Eliminación lógica: en lugar de borrar el documento, se marca con un campo

En cascada: cuando se elimina un documento principal, también se eliminan o marcan sus documentos relacionados

Endpoint para relación N:M

En la relación Post con Tag, se crea un endpoint para agregar tags a un post.

Si el tag no existe, se crea.

Se usa $addToSet para evitar duplicados en el array de tags del post.

Luego se puede usar populate("tags") para ver la relación.