#include<stdio.h>
#include<stdlib.h>
#include<time.h>

enum Vars{count=90000};		//here randomized variable are selected

void Data(int data1[], int data2[], int data3[]);

void QuickSort(int array[], int low, int high);
void MergeSort(int array[], int low, int high);
void Merge(int array[], int low, int high, int mid);
int partition(int array[], int low, int high);
void swapping(int array[], int low, int high);
void QuickSort_R(int array[], int low, int high);

int main()
{
	srand(time(0));
	int data1[count], data2[count], data3[count];
	Data(data1,data2,data3);
	
	long double qstart=clock();
	QuickSort(data1, 0, count-1);
	long double qstop=clock();
	long double qtime = (qstop-qstart)/CLOCKS_PER_SEC;		// calculate time for Quick sort
	printf("\nRuntime QuickSort: %Lf", qtime);
	
	long double rstart=clock();
	QuickSort(data2, 0, count-1);
	long double rstop=clock();
	long double rtime = (rstop-rstart)/CLOCKS_PER_SEC;
	printf("\nRuntime Randomized QuickSort: %Lf", rtime);		// calculate time for Randomized Quick sort
	
	long double mstart = clock();
	MergeSort(data3, 0, count-1);
	long double mstop = clock();
	long double mtime = (mstop-mstart)/CLOCKS_PER_SEC;		// Calculate time for Merge sort
	printf("\nRuntime MergeSort: %Lf", mtime);

	return 0;
}

void Data(int data1[], int data2[], int data3[])		// we take data random from 1-100000
{
	int min=1;
	int max=10000;
	static int data[count];
	for(int number=0; number<count; number++)
	{
		int store=rand()%count+1;
		data1[number]=store;
		data2[number]=store;
		data3[number]=store;
	}
}

void QuickSort(int array[], int low, int high)		// algorithm for quick sort
{
	int i=low, j=high, s;
	int pivot=array[low];
	
	do
	{
		while(array[i]<pivot) i++;
		while(array[j]>pivot) j--;
		if(i<=j)
		{
			s=array[i];
			array[i]=array[j];
			array[j]=s;
			i++;
			j--;
		}
	}while(i<=j);
	if(low<j) QuickSort(array,low, j);
	if(i<high) QuickSort(array,i,high);
}



int partition(int array[], int low, int high)		// partition algorithm

{

 int v=array[low];

 int i=low;

 int j=high;

 do

 {
  do
    {
        i++;
    } while(array[i]<v);
    do
    {
        j--;
    }while(array[j]>v);
        
        if(i<j)
        swapping(array, low, high);

 }while(i<=j);

 array[low]=array[j];		//swaping elements

 array[j]=v;

 return j;

}


void swapping(int array[], int low, int high)	// swapping elements

{

 int temp;

 temp=array[low];

 array[low]=array[high];

 array[high]=temp;

}



void QuickSort_R(int array[], int low, int high) // algorithm for randomized quick sort

{

 int j, k;

 if(low<high)

 {

  k=rand() % (high-low+1)+low;

  swapping(array, k, low);


  j=partition(array, low, high+1);  


  QuickSort_R(array, low, j-1);

  QuickSort_R(array, j+1, high);

 }

}




void Merge(int array[], int low, int high, int mid)		// merge of elements
{
	int b[count];
	int i=low, j=mid+1, k=0;

	while(i<=mid&&j<=high)
	{
		if(array[i]<=array[j])
		b[k++]=array[i++];
		else
		b[k++]=array[j++];
	}
	while(i<=mid)
	{
		b[k++]=array[i++];
	}
	while(j<=high)
	{
		b[k++]=array[j++];
	}
	k--;
	while(k>=0)
	{
		array[low + k]=b[k];
		k--;
	}
}

void MergeSort(int array[], int low, int high) 	// merge sort algorithm
{
	if(low<high)
	{
		int mid=(high+low)/2;
		MergeSort(array,low,mid);
		MergeSort(array,mid+1,high);
		Merge(array,low,mid,high);
	}
}
	