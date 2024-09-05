#include <iostream>
#include<conio.h>
using namespace std;
inline int cube(int a)
{
    return(a*a*a);
}
    int main()
    {
        int n;
        cout<<"Enter a number"<<endl;
        cin>>n;
        cout<<"The cube of "<<n<<" is "<<cube(n)<<endl;
        getch();
    }