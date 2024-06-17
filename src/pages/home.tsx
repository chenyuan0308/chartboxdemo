import { Carousel, Image } from "antd";
import { useMemo } from "react";
export default function Home() {
  const imgList = useMemo(() => {
    return [
      {
        sale: "25%",
        historical_prices: "2887",
        prices: "3850",
        url: "http://shop.huanghanlian.com/_next/image?url=http%3A%2F%2Fhuanghanzhilian-test.oss-cn-beijing.aliyuncs.com%2Fshop%2Fupload%2Fimage%2F%2Fproducts%2FS-0bkuZHpxoB0-eaxVrLe.webp&w=640&q=100",
      },
      {
        sale: "24%",
        historical_prices: "59.28",
        prices: "79",
        url: "http://shop.huanghanlian.com/_next/image?url=http%3A%2F%2Fhuanghanzhilian-test.oss-cn-beijing.aliyuncs.com%2Fshop%2Fupload%2Fimage%2F%2Fproducts%2FX9AGWqXgzr7bgrc_-vL9q.webp&w=640&q=100",
      },
      {
        sale: "18%",
        historical_prices: "12300",
        prices: "15000",
        url: "http://shop.huanghanlian.com/_next/image?url=http%3A%2F%2Fhuanghanzhilian-test.oss-cn-beijing.aliyuncs.com%2Fshop%2Fupload%2Fimage%2F%2Fproducts%2Fn0sPwJaCzVYI4yZN_EANK.webp&w=640&q=100",
      },
      {
        sale: "17%",
        historical_prices: "664",
        prices: "800",
        url: "http://shop.huanghanlian.com/_next/image?url=http%3A%2F%2Fhuanghanzhilian-test.oss-cn-beijing.aliyuncs.com%2Fshop%2Fupload%2Fimage%2F%2Fproducts%2FeIleut5TAwdnYitRE_bKU.webp&w=828&q=100",
      },
      {
        sale: "15%",
        historical_prices: "92.65",
        prices: "109",
        url: "http://shop.huanghanlian.com/_next/image?url=http%3A%2F%2Fhuanghanzhilian-test.oss-cn-beijing.aliyuncs.com%2Fshop%2Fupload%2Fimage%2F%2Fproducts%2F96PIDc76xhxAB1v0IMtM2.webp&w=828&q=100",
      },
      {
        sale: "15%",
        historical_prices: "2507.5",
        prices: "2950",
        url: "http://shop.huanghanlian.com/_next/image?url=http%3A%2F%2Fhuanghanzhilian-test.oss-cn-beijing.aliyuncs.com%2Fshop%2Fupload%2Fimage%2F%2Fproducts%2F0FXkap3UldFhXBlGVT4qU.webp&w=750&q=100",
      },
      {
        sale: "15%",
        historical_prices: "11900",
        prices: "14000",
        url: "http://shop.huanghanlian.com/_next/image?url=http%3A%2F%2Fhuanghanzhilian-test.oss-cn-beijing.aliyuncs.com%2Fshop%2Fupload%2Fimage%2F%2Fproducts%2F9ITjskMj53AKi3X1d72ys.webp&w=640&q=100",
      },
      {
        sale: "13%",
        historical_prices: "1305",
        prices: "1500",
        url: "http://shop.huanghanlian.com/_next/image?url=http%3A%2F%2Fhuanghanzhilian-test.oss-cn-beijing.aliyuncs.com%2Fshop%2Fupload%2Fimage%2F%2Fproducts%2FsV-PTzdN1MR2KhSX8zUea.webp&w=828&q=100",
      },
      {
        sale: "10%",
        historical_prices: "116.1",
        prices: "129",
        url: "http://shop.huanghanlian.com/_next/image?url=http%3A%2F%2Fhuanghanzhilian-test.oss-cn-beijing.aliyuncs.com%2Fshop%2Fupload%2Fimage%2F%2Fproducts%2F3a-sGCVFKOm-EdY0NrBoG.webp&w=750&q=100",
      },
    ];
  }, []);
  return (
    <div>
      <div
        className="cursor-pointer"
        style={{ borderRadius: "1rem", overflow: "hidden" }}
      >
        <Carousel autoplay autoplaySpeed={1500}>
          <div className="text-center">
            <Image
              preview={false}
              width={"80%"}
              style={{ borderRadius: "1rem", height: "25rem" }}
              src="http://huanghanzhilian-test.oss-cn-beijing.aliyuncs.com/shop/upload/image/sliders/hWQ4-Mx69MyLJbZAThWEt.webp"
            />
          </div>
          <div className="text-center">
            <Image
              preview={false}
              width={"80%"}
              style={{ borderRadius: "1rem", height: "25rem" }}
              src="http://huanghanzhilian-test.oss-cn-beijing.aliyuncs.com/shop/upload/image/sliders/hUX6oL-lCKOKPYbZ5j4rx.webp"
            />
          </div>
          <div className="text-center">
            <Image
              preview={false}
              width={"80%"}
              style={{ borderRadius: "1rem", height: "25rem" }}
              src="http://huanghanzhilian-test.oss-cn-beijing.aliyuncs.com/shop/upload/image/sliders/g8FHsxbCGw82WzjmamElL.webp"
            />
          </div>
        </Carousel>
        <div className="mt-8 ml-8 flex px-[8rem] justify-center	 mt-[6rem]">
          {imgList.map((i) => {
            return (
              <div
                key={i.url}
                style={{
                  borderLeft: "3px solid red",
                  borderRight: "3px solid red",
                }}
                className="px-4"
              >
                <Image
                  preview={false}
                  style={{
                    borderRadius: "1rem",
                    height: "7rem",
                    width: "6rem",
                  }}
                  src={i.url}
                />
                <div className="flex items-center">
                  <div
                    className="py-1 px-2 bg-[red] text-white font-bold"
                    style={{ borderRadius: "1rem" }}
                  >
                    {i.sale}
                  </div>
                  <span className="ml-4 font-bold text-xl ">{i.prices}</span>
                </div>
                <div className="float-right ">
                  <span className="line-through">{i.historical_prices}</span>
                </div>
              </div>
            );
          })}
        </div>
        <div className="text-center mt-12 text-xl">
          <span className="text-red-500">Featured Products</span> -{" "}
          <span>all categories</span>
          <div className="mt-8 flex justify-center">
            <span>
              <Image
                preview={false}
                style={{
                  borderRadius: "1rem",
                  height: "10rem",
                  width: "10rem",
                  marginRight: "3rem",
                }}
                src="http://shop.huanghanlian.com/_next/image?url=http%3A%2F%2Fhuanghanzhilian-test.oss-cn-beijing.aliyuncs.com%2Fshop%2Fupload%2Fimage%2F%2Ficons%2FPkqdPDirMxW6m5J32pQSy.webp&w=750&q=100"
              />
              <div>Fashion and Clothing</div>
            </span>
            <span>
              <Image
                preview={false}
                style={{
                  borderRadius: "1rem",
                  height: "10rem",
                  width: "10rem",
                }}
                src="http://shop.huanghanlian.com/_next/image?url=http%3A%2F%2Fhuanghanzhilian-test.oss-cn-beijing.aliyuncs.com%2Fshop%2Fupload%2Fimage%2F%2Ficons%2F5WqXrtYDMWbZGP70y2wAR.webp&w=828&q=100"
              />
              <div>Digital Products</div>
            </span>
          </div>
        </div>

        <div className="w-[100%] flex justify-center mt-12">
          <Image
            preview={false}
            width={"40%"}
            style={{
              borderRadius: "1rem",
              height: "20rem",
            }}
            src="http://shop.huanghanlian.com/_next/image?url=http%3A%2F%2Fhuanghanzhilian-test.oss-cn-beijing.aliyuncs.com%2Fshop%2Fupload%2Fimage%2Fbanners%2FAAR1hdzMBEfpYKym3njGU.jpeg&w=1080&q=100"
          />
          <span className="mx-2"></span>
          <Image
            preview={false}
            width={"40%"}
            style={{
              borderRadius: "1rem",
              height: "20rem",
            }}
            src="http://shop.huanghanlian.com/_next/image?url=http%3A%2F%2Fhuanghanzhilian-test.oss-cn-beijing.aliyuncs.com%2Fshop%2Fupload%2Fimage%2Fbanners%2FtHzPZwswSaFdD_3TpdPCt.jpeg&w=750&q=100"
          />
        </div>
        <div className="w-[100%] flex justify-center mt-4">
          <Image
            preview={false}
            width={"40%"}
            style={{
              borderRadius: "1rem",
              height: "20rem",
            }}
            src="http://shop.huanghanlian.com/_next/image?url=http%3A%2F%2Fhuanghanzhilian-test.oss-cn-beijing.aliyuncs.com%2Fshop%2Fupload%2Fimage%2Fbanners%2FluBUyOForM7vLS8SMMORT.jpeg&w=828&q=100"
          />
          <span className="mx-2"></span>
          <Image
            preview={false}
            width={"40%"}
            style={{
              borderRadius: "1rem",
              height: "20rem",
            }}
            src="http://shop.huanghanlian.com/_next/image?url=http%3A%2F%2Fhuanghanzhilian-test.oss-cn-beijing.aliyuncs.com%2Fshop%2Fupload%2Fimage%2Fbanners%2FAG8T4X-3pFnHc1O2XEeN5.jpeg&w=1080&q=100"
          />
        </div>
      </div>
    </div>
  );
}
