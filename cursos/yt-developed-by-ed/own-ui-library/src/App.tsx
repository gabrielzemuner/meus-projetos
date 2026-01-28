import Button from "./components/Button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./components/Card";
import NeuCheckbox from "./components/Checkbox";
import Nav from "./components/Nav";
import NeuSwitch from "./components/Switch";

function App() {
  return (
    <main>
      <Nav />
      <div className="space-x-2">
        <Button>Submit</Button>
        <Button variant={"primary"}>Submit</Button>
        <Button variant={"destructive"}>Cancel</Button>
        <Button variant={"warning"}>Warning</Button>

        <Button variant={"primary"} disabled>
          Warning
        </Button>

        <div className="m-6">
          <Card>
            <CardHeader>
              <CardTitle>This is my title</CardTitle>
              <CardDescription>This is the price of my product</CardDescription>
            </CardHeader>
            <CardContent>
              <ul>
                <li>this is one benefit</li>
                <li>this is one benefit</li>
                <li>this is one benefit</li>
              </ul>
            </CardContent>
            <CardFooter>
              <NeuSwitch />
              <NeuCheckbox />
            </CardFooter>
          </Card>

          {/* <CardRoot variant="raised">
            <CardRoot.Header>
              <CardRoot.Title>This is my title</CardRoot.Title>
              <CardRoot.Description>
                This is the price of my product
              </CardRoot.Description>
            </CardRoot.Header>
            <CardRoot.Content>
              <ul>
                <li>this is one benefit</li>
                <li>this is one benefit</li>
                <li>this is one benefit</li>
              </ul>
            </CardRoot.Content>
            <CardRoot.Footer>
              <Button variant={"primary"}>Purchase now</Button>
            </CardRoot.Footer>
          </CardRoot> */}
        </div>
      </div>
    </main>
  );
}

export default App;
