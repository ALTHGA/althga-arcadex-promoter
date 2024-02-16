import Image from "next/image";
import { FaHouse, FaArrowRight, FaUsers } from "react-icons/fa6";
import { MdDownload } from "react-icons/md";

import { IoSearch } from "react-icons/io5";
import { Card } from "@/components/Card";

export default function SalesPromoter() {
  return (
    <div className="bg-gray-50 w-screen h-screen p-4 md:p-12 lg:p-14 space-y-10 overflow-auto">
      <header className="bg-white p-6 rounded-xl flex flex-wrap md:flex-nowrap items-center justify-between">
        <div className="flex items-center space-x-4">
          <img
            className="rounded-full h-10 md:h-14 w-10 md:w-14 "
            src={"https://api.dicebear.com/7.x/initials/svg?seed=Willow"}
            alt="Avatar profile"
          />

          <div>
            <h2 className="font-medium text-lg text-gray-700">
              Dr. Roosevelt Kihn
            </h2>
            <p className="text-gray-400">example@example.com</p>
          </div>
        </div>

        <div className="flex space-x-6 justify-end w-full mt-4 md:mt-0">
          <button className="text-sm">Sair da conta</button>
          <button className="bg-gray-900 hover:bg-white border-2 border-transparent hover:border-gray-900 px-2 md:px-4 py-2 md:py-3 rounded-lg text-sm text-white hover:text-gray-900 transition duration-100 ease-out font-medium">
            Compartilhar meu link
          </button>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="flex items-center space-x-4 col-span-full md:col-span-2">
          <a
            href="/sales-promoter"
            className="flex items-center font-medium text-gray-900 text-sm"
          >
            <FaHouse className="mr-2 text-lg" /> Dashboard
          </a>
          <a
            href=""
            className="flex items-center font-medium text-gray-300 text-sm"
          >
            <FaUsers className="mr-2 text-lg" /> Pendentes
          </a>
        </div>

        <div className="flex items-center justify-end gap-2 col-span-3 md:col-span-1">
          <div className="h-10 col-span-1 bg-white flex items-center rounded-md gap-2 w-full  justify-evenly">
            <input type="date" className="outline-none" />

            <input type="date" className="outline-none" />
          </div>

          <button className="bg-gray-900 flex justify-center items-center col-span-1 text-white h-10 w-10 flex-shrink-0 rounded-md">
            <MdDownload className="h-6 w-6" />
          </button>
        </div>

        <div className="flex flex-col col-span-3 space-y-4 md:flex-row md:space-y-0 md:space-x-4">
          <Card
            title="Renovações pagas"
            description="Todas as renovações que foram pagas durante o período"
            amount={10}
          />
          <Card
            title="Renovações não pagas"
            description="Todas as renovações que foram pagas durante o período"
            amount={10}
          />
          <Card
            title="Receber"
            description="Todas as renovações que foram pagas durante o período"
            amount={10}
          />
        </div>

        <div className="col-span-3 lg:col-span-2 h-80 bg-white p-6 rounded-lg block space-y-4 ">
          <div className="w-full flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 border-b border-gray-100 pb-4">
            <span>
              <h1 className="font-semibold text-lg text-gray-900">Usuários</h1>
              <p className="text-gray-500">
                Usuários que entraram pelo seu link
              </p>
            </span>
            <span className="pr-6 bg-gray-100 flex items-center space-x-4 rounded-lg">
              <input
                type="text"
                placeholder="Pesquisar usuário"
                className="bg-transparent py-3 pl-6 outline-none"
              />
              <IoSearch className="text-2xl text-gray-400" />
            </span>
          </div>

          <ul>
            <li>
              <div className="flex items-center space-x-4">
                <img
                  className="rounded-full h-10 w-10"
                  src={"https://api.dicebear.com/7.x/initials/svg?seed=Willow"}
                  alt="Avatar profile"
                />
                <span>
                  <h4 className="font-semibold">Example cliente</h4>
                  <p className="text-sm">Usou seu link 12 de fevereiro 2024</p>
                </span>
              </div>
            </li>
          </ul>
        </div>

        <div className="col-span-3 h-full lg:col-span-1 bg-white p-6 rounded-lg block space-y-4 ">
          <div className="w-full flex flex-col  md:space-y-0 border-b border-gray-100 pb-4">
            <h1 className="font-semibold text-lg text-gray-900">Pagamentos</h1>
            <p className="text-gray-500">Pagamentos durante o período</p>
          </div>

          <ul>
            <li>
              <div className="flex items-center justify-between space-x-4">
                <p className="text-sm">12 de fevereiro 2024</p>
                <h4 className="font-semibold">R$ 10,00</h4>
              </div>
            </li>
            <li>
              <div className="flex items-center justify-between space-x-4">
                <p className="text-sm">12 de fevereiro 2024</p>
                <h4 className="font-semibold">R$ 10,00</h4>
              </div>
            </li>
            <li>
              <div className="flex items-center justify-between space-x-4">
                <p className="text-sm">12 de fevereiro 2024</p>
                <h4 className="font-semibold">R$ 10,00</h4>
              </div>
            </li>
            <li>
              <div className="flex items-center justify-between space-x-4">
                <p className="text-sm">12 de fevereiro 2024</p>
                <h4 className="font-semibold">R$ 10,00</h4>
              </div>
            </li>
            <li>
              <div className="flex items-center justify-between space-x-4">
                <p className="text-sm">12 de fevereiro 2024</p>
                <h4 className="font-semibold">R$ 10,00</h4>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
