#include<iostream>
#include<conio.h>
using namespace std;
inline int cube(int a)
{
    return(a*a*a);
}
int main()
{
    int n;
    cout<<"Enter a number: ";
    cin>>n;
    cout<<"Cube of "<<n<<" is "<<cube(n);
}