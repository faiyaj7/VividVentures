class ApiFeature {
  constructor(query, queryStr) {
    this.query = query;
    this.queryStr = queryStr;
  }

  search() {
    const keyword = this.queryStr.keyword && {
      name: {
        $regex: this.queryStr.keyword,
        $options: "i",
      },
    };
    console.log({ ...keyword });
    // console.log(this);
    this.query = this.query.find({ ...keyword });
    return this;
  }
  filter() {
    const duplicateQueryString = { ...this.queryStr };
    console.log("the duplicate query str ", duplicateQueryString);
    const removeFields = ["keyword", "page", "limit"];
    // removing some fields for category

    // If category is an empty string, remove the category filter
    if (duplicateQueryString.category === "") {
      delete duplicateQueryString.category;
    } else {
      // Apply category filter
      this.query = this.query.find({
        category: duplicateQueryString.category,
      });
    }
    removeFields.map((key) => delete duplicateQueryString[key]);

    console.log(duplicateQueryString);

    // for price and rating
    let queryStr = JSON.stringify(duplicateQueryString);
    // console.log("json stringify is ", queryStr);
    queryStr = queryStr.replace(/\b(gt|gte|lt|lte)\b/g, (key) => `$${key}`);
    console.log("after json formatted", JSON.parse(queryStr));
    this.query = this.query.find(JSON.parse(queryStr));
    // console.log(this.query);

    return this;
  }
  pagination(productPerPage) {
    const page = Number(this.queryStr.page) || 1;
    const skip = (page - 1) * productPerPage;
    this.query = this.query.limit(productPerPage).skip(skip);
    return this;
  }
}

export default ApiFeature;
