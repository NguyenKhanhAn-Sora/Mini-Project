myfuntion();
async function myfuntion() {
    const url="https://www.lotteria.vn/rest/english/V1/grs/categories/list?searchCriteria[filterGroups][0][filters][0][field]=parent_id&searchCriteria[filterGroups][0][filters][0][value]=24&searchCriteria[filterGroups][0][filters][0][conditionType]=eq&searchCriteria[sortOrders][0][direction]=DESC&searchCriteria[sortOrders][0][field]=created_at"
    const respon = await fetch(url);
    const data = await respon.json();
    const productData = data.data;
    console.log(productData);
}
