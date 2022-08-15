import Joi from "joi-browser";

export const validateProperty = (
  required,
  name,
  value,
  label = "Current Field",
  anyVal = null
) => {
  let Joischema = {};
  if (required) {
    Joischema = {
      name: Joi.string().label(label).required(),
      number: Joi.number().integer().min(0).label(label).required(),
    };
  } else {
    Joischema = {
      name: Joi.string().label(label).allow(null),

      number: Joi.number().integer().min(0).label(label).allow(null),
    };
  }
  const schema = Joi.reach(Joi.object(Joischema), name);
  const { error } = Joi.validate(value, schema);
  return error ? error.details[0].message : undefined;
};
