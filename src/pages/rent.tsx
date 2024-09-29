import {
  Card,
  CardHeader,
  CardBody,
  Image,
  Chip,
  CardFooter,
  Button,
} from "@nextui-org/react";
import { Navbar } from "@/components/navbar";
import { Link } from "react-router-dom";

export default function RentPage() {
  return (
    <>
      <Navbar />
      <div className="m-5">
        <Card className="py-4 max-w-[300px]">
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <Chip color="primary" variant="shadow" radius="md">
              New
            </Chip>
            <br />
            <h4 className="font-bold text-large">BMW</h4>
          </CardHeader>
          <CardBody className="overflow-visible py-2">
            <Image
              alt="Card background"
              className="object-cover rounded-xl"
              src="https://cloud.starkinsider.com/wp-content/uploads/2020/03/1997-BMW-logo.webp"
              width={270}
            />
          </CardBody>
          <CardFooter>
            <Link to={"/bmw"}>
              <a>
                <Button
                  color="primary"
                  variant="bordered"
                  className="text-bold"
                >
                  ดูเพิ่มเติม
                </Button>
              </a>
            </Link>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}
