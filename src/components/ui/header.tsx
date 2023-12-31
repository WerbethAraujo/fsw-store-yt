import {
  MenuIcon,
  ShoppingCartIcon,
  LogInIcon,
  HomeIcon,
  PercentIcon,
  ListIcon,
} from "lucide-react";
import { Button } from "./button";
import { Card } from "./card";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "./sheet";

const Header = () => {
  return (
    <Card className="flex justify-between p-[1.87rem] items-center">
      <Sheet>
        <SheetTrigger asChild>
          <Button size="icon" variant="outline">
            <MenuIcon />
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <SheetHeader className="text-left text-lg font-semibold">
            Menu
          </SheetHeader>
          <div className="mt-2 flex flex-col gap-2">
            <Button
              size="icon"
              variant="outline"
              className="w-full justify-start gap-2"
            >
              <LogInIcon size={16} />
              Entrar
            </Button>
            <Button
              size="icon"
              variant="outline"
              className="w-full justify-start gap-2"
            >
              <HomeIcon size={16} />
              Inicio
            </Button>
            <Button
              size="icon"
              variant="outline"
              className="w-full justify-start gap-2"
            >
              <PercentIcon size={16} />
              Ofertas
            </Button>
            <Button
              size="icon"
              variant="outline"
              className="w-full justify-start gap-2"
            >
              <ListIcon size={16} />
              Catálogo
            </Button>
          </div>
        </SheetContent>
      </Sheet>
      <h1 className="text-lg font-semibold">
        <span className="text-primary">FSW</span> Store
      </h1>

      <Button size="icon" variant="outline">
        <ShoppingCartIcon />
      </Button>
    </Card>
  );
};

export default Header;
