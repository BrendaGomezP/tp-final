function createFilter(obj) {
  const { limit, offset, ...where } = obj;
  if (!limit || limit > 100 || limit < 0) obj.limit = 50;
  if (!offset) obj.offset = 0;

  const filters = {
    limit: obj.limit,
    offset: obj.offset,
    where,
  };

  return filters;
}

export default createFilter;
