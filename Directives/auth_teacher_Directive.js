const { mapSchema, getDirective, MapperKind } = require("@graphql-tools/utils");
const { AuthenticationError } = require("apollo-server-errors");
const { defaultFieldResolver } = require("graphql");

function authTeacherDirective(schema, directiveName) {
  return mapSchema(schema, {
    [MapperKind.OBJECT_FIELD]: (fieldConfig) => {
      const upperDirective = getDirective(
        schema,
        fieldConfig,
        directiveName
      )?.[0];
      if (upperDirective) {
        const { resolve = defaultFieldResolver } = fieldConfig;
        fieldConfig.resolve = async function (source, args, context, info) {
          const result = await resolve(source, args, context, info);
          if (context.user.role == "teacher") {
            return result;
          } else {
            throw new AuthenticationError("Auth is Required For This Field");
          }
        };
        return fieldConfig;
      }
    },
  });
}

module.exports = { authTeacherDirective };
