"use client"
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Hero from "@/components/Home/Hero";
import SearchInput from "@/components/Home/SearchInput";
import CarsFiltersOption from "@/components/Home/CarsFiltersOption"
import { getCarsList } from "@/services";
import { useEffect,useState } from "react";
import CarsList from "@/components/Home/carsList";


export default function Home() {
  const [carsList,setCarsList]=useState<any>([])
  const [carsorgList,setCarsOrgList]=useState<any>([])
  useEffect(()=>{
   getCarList_();
  },[])
  const getCarsList=async()=>{
    const result:any=await getCarsList();
    setCarsList(result?.carLists)
    setCarsOrgList(result?.carLists);
  }
  const filterCarList=(brand.string)=>{
     const filterList=carsOrgList.filter((item:any)=>
      item.carBrand==brand);
     setCarsList(filterList);
     }
  }
  const OrderCarList=(order:any)=>{
    const sortedData=[...carsOrgList].sort((a,b)=>
    order==-1?a.price-b.price:b.price-a.price;
    setCarsList(sortedData);
)
  }
  return (
    <div className="p-5 sm:px-10 md:px-10">
      <Hero/>
      <SearchInput/>
      <CarsFiltersOption carsList={carsOrgList} setBrand={(value:string)=>filterCarList(value)}/>
      <CarsList carsList={carsList}/>
    </div>
  );
}
