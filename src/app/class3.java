class Machine{
	int price;
}
class Computer extends Machine{
	Computer(){
		price=2000;
	}
	void getprice(){
		System.out.println(price);
	}

}
class Laptop extends Machine{
	Laptop(){
		price=20000;
	}
	void getprice(){
		System.out.println(price);
	}
}
class Test{
public static void main(String[] args) {
		Test t=new Test();
		Machine m=new Machine();
		Computer c=new Computer();
		Laptop l=new Laptop();
		t.display(m);
			t.display(c);
				t.display(l);
}
void display(Machine m){
	if(m instanceof Computer){
	Computer c= (Computer)m; // here in all cases we are downcasting otherwise we will get runtime exception
	c.getprice();
}
else if(m instanceof Laptop){
	Laptop l=(Laptop)m;
	l.getprice();
}
else{
	System.out.println("no casting is required");
}
}
}