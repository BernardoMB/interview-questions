using System;

public class Program
{
    public static int Solve(int N, int M)
    {
        int money = M;
        int employees = N;
        Console.WriteLine($"Money: {money}");
        Console.WriteLine($"Employees: {employees}");
        while (money > 0)
        {
            Console.WriteLine($"Money left: {money}");
            for (int i = 1; i <= employees; i++)
            {
                Console.WriteLine($"Employee {i} needs to get {i}, but there is only {money} left");
                if (money < i)
                {
                    // No money left to pay
                    Console.WriteLine("Cant pay more");
                    return money;
                }
                else
                {
                    // Pay the money
					Console.WriteLine($"Paying {i}");
                    money -= i;
                }
            }
        }
        return money;
    }

    public static void Main(string[] args)
    {
        int N = 3;
        int M = 8;
        int outcome = Program.Solve(N, M);
		Console.WriteLine(outcome);
    }
}
