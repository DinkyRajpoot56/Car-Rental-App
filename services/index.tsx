import request,{gql}  from "graphql-request"
const MASTER_URL="https://ap-south-1.cdn.hygraph.com/content/cmg0ylxre00db07w5f3hn83n4/master"

export const getCarsList=async()=>{
    const query=gql`
    query CarLists {
    carLists{
    carAvg
    createdAt
    id 
    name
    price
    publishedAt
    updatedAt
    seat
    image{
      url
    }
    }}`
    const result=await request('https://ap-south-1.cdn.hygraph.com/content/cmg0ylxre00db07w5f3hn83n4/master',query);
    return result;
}
export const getStoreLocations=async()=>{
  const query=gql`
  query storeLocation{
  storeLocations{
   address
  }}`
  const result=await request(MASTER_URL,query);
  return result;
}
