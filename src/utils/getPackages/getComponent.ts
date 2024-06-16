export const loadComponent = async (com: string): Promise<any> => {
  try {
    const component = await import(`/src/packages/basic/${com}/index.vue`);
    return component.default;
  } catch (error) {
    console.error("Failed to load component:", error);
    return null;
  }
};

export const allLoadComponent = async (data: any): Promise<any> => {
  const jsonToData = data;
  const newList: any = [];
  jsonToData.forEach((item: any) => {
    newList.push(loadComponent(item.id.split("-")[0]));
  });
  return newList;
};
