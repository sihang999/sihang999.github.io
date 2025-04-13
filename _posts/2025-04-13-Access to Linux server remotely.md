---
layout: post
title: How to Access Remote Linux Server
date: 2025-04-12 08:57:00-0400
description: The post introduces MobaXterm for remote access to a Linux server.
#这个tag表示了分类，这里包含了两个标签formatting和links
tags: Linux
categories: code
---
During your studies and work at TUM, you may often encounter situations where you cannot physically access the lab, but the experiments or code must be run only within the lab environment.

For example:

- The lab is closed on weekends but the deadline is approaching.

- You are traveling, but suddenly need to modify or improve your experiment code remotely.

Feeling anxious in these situations?

This is exactly where remote access tools come in handy. By connecting to the lab server remotely via command line/console, you can easily edit files, modify code, view results, and perform many other tasks.

If GUI applications are necessary, we can use MobaXterm's X11 forwarding or VNC to display GUI applications on your local computer and interact with them just like working in the lab.

> Note: All of this assumes that you already have access to the server — meaning you should have a valid username and password granted by the administrator.

# 1. Download MobaXterm
MobaXterm is a powerful remote terminal tool mainly used on Windows systems for managing Linux/Unix servers remotely.

It integrates multiple remote connection protocols and tools, such as:

- SSH

- X11 forwarding

- RDP / VNC / FTP / Telnet / Serial

And the best part — it’s free! You can download it directly from the [official website](https://mobaxterm.mobatek.net/).


# 2. Accessing Linux Servers via Different Protocols

## - SSH Protocol

If you don't need any graphical interface (GUI), the simplest and most efficient way is to connect to the lab's Linux server via SSH.

Once connected, you can directly work in the server’s terminal environment to edit code, manage files, and perform various operations.
For example: `Editing code using vim / nano / emacs`.
(This tutorial will not cover these commands in detail since there are plenty of guides online.)


### Steps

1. Open MobaXterm.

2. Create a new session and select SSH protocol as shown below:

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/access_linux_server/SSH.jpg" class="img-fluid rounded z-depth-1" %}
    </div>
</div>


&emsp;3\. Enter the target server’s IP address and your assigned username. Leave other settings as default and click OK.

&emsp;4\. A new SSH session will be created. Double-click it to open. Enter your password (If you didn’t set a username initially, you will be asked to input it now).

Once connected, you will be in the root directory of the target server as shown below:

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/access_linux_server/SSH-pass.jpg" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/access_linux_server/final.jpg" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

Now, you can work and study from anywhere!


## - SSH Protocol with X11 forwarding
If you are not familiar with Linux command line operations, or you must use a certain GUI application to proceed with your experiments, then SSH combined with X11 forwarding is the best choice. It is stable and fast.

### Steps

1. Make sure that the server has xauth installed and that X11Forwarding is enabled. If not, run the following commands on the server:

    ```c
    //install xauth
    sudo apt update
    sudo apt install xauth x11-apps xfce4

    // Check X11 Forwarding in sshd_config
    sudo nano /etc/ssh/sshd_config
    //Make sure the following lines exist:
    // X11Forwarding yes
    // X11DisplayOffset 10
    // X11UseLocalhost yes
    sudo systemctl restart sshd
    ```

2. Creating SSH with X11 Forwarding Session:
The steps are almost the same as creating a normal SSH session. The only difference is that you need to ensure X11-Forwarding is checked in the "Advanced SSH Settings" section.

    After connecting successfully, you will also land in the server's root directory just like with SSH.

3. Now, you can run GUI applications directly in the console, and they will pop up on your local machine. For example, to open Firefox browser, simply run:`firefox`。

> Keep in mind that some applications might require being launched from a specific directory — you should know this based on your project setup.

### - VNC

updating......
