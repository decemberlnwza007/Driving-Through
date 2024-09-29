import {
  Card,
  Input,
  CardBody,
  DatePicker,
  TimeInput,
  Button,
  Image,
  CardHeader,
  CardFooter,
} from "@nextui-org/react";
import "@/styles/styleindex.css";

import { Link } from "@nextui-org/react";

export default function IndexPages() {
  return (
    <center>
      <br />
      <Card className="max-w-[400px]" shadow="md" radius="md">
        <CardBody>
          <div className="text-3xl flex">
            คุณต้องการไป <div className="where">ที่ไหน</div> ?
          </div>
          <br />
          <Input placeholder="จุดเริ่มต้น" variant="bordered" />
          <br />
          <Input placeholder="ถึง" variant="bordered" />
          <br />
          <div className="flex">
            <DatePicker className="max-w-[200px]" />
            &nbsp;
            <TimeInput className="max-w-[200px]" />
          </div>
          <br />
          <Button color="primary">ดูราคา</Button>
        </CardBody>
      </Card>
      <br />
      <h1 className="text-3xl">แนะนำบริการของเรา</h1>
      <br />
      <div className="flex justify-center">
        <Card
          style={{ backgroundColor: "#f3f3f3" }}
          className="max-w-[400px] mx-2"
        >
          <CardHeader>บริการเช่ารถ</CardHeader>
          <CardBody>มีรถมากมายให้คุณเลือก!</CardBody>
          <CardFooter>
            <Image
              className="max-w-[150px]"
              src="https://www.tesla.com/ownersmanual/images/GUID-B5641257-9E85-404B-9667-4DA5FDF6D2E7-online-en-US.png"
            />
            <Link href="/rent">
              <Button color="primary">
                <a>ดูเพิ่มเติม </a>
              </Button>
            </Link>
          </CardFooter>
        </Card>
        <Card
          style={{ backgroundColor: "#f3f3f3" }}
          className="max-w-[400px] mx-2"
        >
          <CardHeader>บริการส่งอาหาร</CardHeader>
          <CardBody>หากคุณไม่อยากไปข้างนอกลองสั่งเลย!</CardBody>
          <CardFooter>
            <Image
              className="max-w-[100px]"
              src="https://static.vecteezy.com/system/resources/previews/016/765/986/original/steak-fast-food-cartoon-png.png"
            />
            <Button color="primary">ดูเพิ่มเติม</Button>
          </CardFooter>
        </Card>
      </div>
    </center>
  );
}
