   M S B A M L   `   `   `  ����B  >WpfApp1, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null!clr-namespace:WpfApp1WpfApp1  5   	       WpfApp1.MainWindow   5   	   W SPresentationCore, Version=8.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35\ XPresentationFramework, Version=8.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35e aSystem.Windows.Controls.Ribbon, Version=8.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089R NWindowsBase, Version=8.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35F 9http://schemas.microsoft.com/winfx/2006/xaml/presentation     5   	   R NSystem.Xaml, Version=8.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089:x,http://schemas.microsoft.com/winfx/2006/xaml     5   	   @d2http://schemas.microsoft.com/expression/blend/2008     5   	   Jmc;http://schemas.openxmlformats.org/markup-compatibility/2006     5   	   'localclr-namespace:WpfApp1     5   	     � WindowStartupLocation$  CenterScreen=�5   	    � WindowStyle$
 None=�5	   	    � AllowsTransparency$
 True��5
   	   
������  � Title$ 
MainWindow��5   	   $	��500��5   	   $	��800��5   	   .��5      �  � ColumnDefinitions 5   
   �� 5      $��* �6   �� 5      $
��1.5* �6   .+�5   
   �� $��0��6    �� CornerRadius$ 	10,0,0,10��6!   ��5      �� 5       �� ImageSource$ Images/LOG_side.jpg��6    j� Stretch$
 Fill=�6?   5      �� 5   
   $��1��6   $ 	10,0,0,10��6!   ��5      �� 5      $ Images/LogBG.jpg��6   $
 Fill=�6<   ._�5!      � .+�5#      �� $��Images/Logo.png��6   $��Center=�5$      $	��Top=�5%      $��40q�5&      $	��200��5'      �� 5*      $��Center=�6   $��Center=�6:   $	��300��6U   .+�5,      �� $��Login��6    $��24(�6-   $
��Bold"�6;   ���#ffcc04 �� TextAlignment$ Center=�6b   $��0,0,0,10q�6y   �� 5/      $��
Username :��6    $��14(�62   $��Medium"�6@   ���#ffcc046T   �� 50      -   5        $��UsernameTextBox��50      $��30��65   $��5q�6A   ���#ffcc04$��1q�6c   �� 53      $��
Password :��6    $��14(�62   $��Medium"�6@   $��0,10,0,0q�6T   ���#ffcc046f   G� 54      -   5        $��PasswordBox��54   "   $��30��65   $��5q�6A   ���#ffcc04$��1q�6c   �� 57      -   5        $��Login��57      $	��100��6-   $��35��69   ���#ffcc04���	#FF032113$
��Bold"�59      ���#ffcc04$��1q�6=   $��Center=�5:      $��0,15,0,0q�62   5;      5<      5=      5>      5?      5@      