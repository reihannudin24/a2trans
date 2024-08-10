import {CardComponent} from "../component/Card.Component";
import {InputCheckbox, InputFilter, InputSearch} from "../component/Input.Component";


const categories = [
    {
        "id" : "1",
        "name" : "Rental Mobil",
        "quantity" : "3",
    },
    {
        "id" : "2",
        "name" : "Travel",
        "quantity" : "4",
    },
]

function Categories(){
    return(
        <>
            <section className={"w-full"}>
                <div className={"w-full"}>
                    <div className={"bg-primary  relative pt-10 pb-14 lg:pb-20"}>
                        <div className={"w-11/12 mx-auto"}>
                            <div className={"text-left lg:text-center"}>
                                <h2 className={"text-white text-2xl lg:text-3xl font-semibold"}>Temukan Kendaraan yang Tepat untuk Setiap Perjalanan Anda!</h2>
                                <div className={"my-3 lg:my-2"}>
                                    <p className={"text-white hidden lg:block text-sm"}>Telusuri daftar mobil terbaik dari berbagia merek dan model yang tersedia di A2Trans, memastikan Anda menemukan <br/> kendaraan yang tepat untuk setiap perjalanan Anda!</p>
                                    <p className={"text-white block lg:hidden text-sm"}>Telusuri daftar mobil terbaik dari berbagia merek dan model yang tersedia di A2Trans, memastikan Anda menemukan</p>
                                </div>
                            </div>
                        </div>
                        <div className={"w-10/12 left-0 right-0 absolute -bottom-6 mx-auto"}>
                            <div className={"w-full lg:w-9/12 mx-auto"}>
                                {/*Search*/}
                                <InputSearch />
                            </div>
                        </div>
                    </div>
                    <div className={"w-full lg:w-10/12 mt-8 lg:mt-10 mx-auto"}>
                      <div className={"w-full"}>
                          <div className={"w-full block lg:flex gap-4"}>
                              <div className={"border-b border-gray-300 lg:shadow w-full lg:w-3/12  py-4 px-3 rounded-lg"}>
                                  <div className={"hidden lg:block w-11/12"}>
                                          <div className={""}>
                                              <div className={"mb-3 border-b border-gray-100 pb-3"}>
                                                  <h2 className={"text-md text-gray-700 font-semibold"}>Categories</h2>
                                              </div>
                                              <div className={"mt-4"}>
                                                  <ul className={"block"}>
                                                      {categories.map((item, index) => {
                                                          return(
                                                              <li className={"my-2"}>
                                                                  <InputCheckbox name={item?.name} />
                                                              </li>
                                                          )
                                                      })}
                                                  </ul>
                                              </div>
                                          </div>

                                      </div>
                                  <div className={"block lg:hidden w-11/12"}>
                                      <div className={""}>
                                          <ul className={"flex "}>
                                              <li className={"w-6/12 mx-auto"}>
                                                 <InputFilter />
                                              </li>
                                              <li className={"w-6/12 mx-auto"}>
                                                  <InputFilter />
                                              </li>
                                          </ul>
                                      </div>
                                  </div>
                              </div>
                              <div className={"w-full my-4 lg:w-9/12 "}>
                                  <div className={"w-full "}>
                                      <div className={"w-full relative"}>
                                          <ul className={"w-full flex flex-wrap relative"}>
                                             <li className={"w-6/12 lg:w-4/12  my-3"}>
                                                 <CardComponent />
                                             </li>
                                          </ul>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                    </div>
                </div>
            </section>
        </>
    )
}


export default Categories