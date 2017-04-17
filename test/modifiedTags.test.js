const getModifiedTag = require('../functions/utils/tags.js').getModifiedTag;


describe('modified Tags', () => {
  it('should return the difference between two arrays', () => {
    const tagList1 = ['galletas', 'bizcocho', 'chorizo'];
    const tagList2 = ['galletas', 'bizcocho'];
    expect(getModifiedTag(tagList1, tagList2)).toBe('chorizo');
  });

  it('should return null value', () => {
    const tagList1 = ['galletas'];
    const tagList2 = ['galletas', 'bizcocho'];
    expect(getModifiedTag(tagList1, tagList2)).toBeNull();
  });

  it('should return null value', () => {
    const tagList1 = ['galletas', 'bizcocho'];
    const tagList2 = ['galletas', 'bizcocho'];
    expect(getModifiedTag(tagList1, tagList2)).toBeNull();
  });

});
