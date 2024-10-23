// Utility function to convert a object to its localization based on the language



export function getLocalized(item, language) {
  var localizedObject = {};
  Object.keys(item).forEach((key) => {
    if (Array.isArray(item[key])) {
      const localizedArray = item[key].map((subitem) => {
        return getLocalized(subitem, language);
      });
      localizedObject[key] = localizedArray;
    } else if (item[key] instanceof Object) {
      localizedObject[key] = getLocalized(item[key], language);
    } else {
      const keyWithoutEn = key.endsWith("_en") ? key.slice(0, -3) : key;
      if (key.endsWith("_en")) {
        localizedObject[keyWithoutEn] =
          item[`${keyWithoutEn}_${language}`] || item[`${keyWithoutEn}_en`];
      } else if (!key.endsWith("_ar")) {
        localizedObject[keyWithoutEn] = item[keyWithoutEn];
      }
    }
  });

  return localizedObject;
}
  