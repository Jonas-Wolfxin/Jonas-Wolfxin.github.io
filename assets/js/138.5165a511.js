(window.webpackJsonp=window.webpackJsonp||[]).push([[138],{736:function(t,e,s){"use strict";s.r(e);var a=s(14),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"routing-static"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#routing-static"}},[t._v("#")]),t._v(" Routing_Static")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Jonas-Wolfxin/MyPicgo/img/202303190023254.png",alt:"image-20220619113100182"}})]),t._v(" "),s("h2",{attrs:{id:"routing"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#routing"}},[t._v("#")]),t._v(" Routing")]),t._v(" "),s("h3",{attrs:{id:"what-is-routing"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#what-is-routing"}},[t._v("#")]),t._v(" What is routing?")]),t._v(" "),s("blockquote",[s("ul",[s("li",[s("p",[t._v("Routing is the process that routers use to determine the path that IP packets should take over a network to reach their destination. 路由选择是指将分组从一个设备通过互联网络发往位于不同网络上的另一个设备的路径选择。路由器不关注网络中的主机，而只关注互联起来的网络以及通往各个网络的最佳路径。")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("Routers store routes to all of their known destinations in a routing table.")])]),t._v(" "),s("li",[s("p",[t._v("When routers receive packets, they look in the routing table to find the "),s("strong",[t._v("best route")]),t._v(" to forward that packet.")])])])])]),t._v(" "),s("blockquote",[s("h6",{attrs:{id:"route-selection-principle"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#route-selection-principle"}},[t._v("#")]),t._v(" Route selection principle:")]),t._v(" "),s("p",[t._v("Most specific matching route, which means the matching route with the "),s("strong",[t._v("longest prefix length")]),t._v(".")])]),t._v(" "),s("ul",[s("li",[s("p",[t._v("There are two main routing methods (methods that routers use to learn routes):")])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("Dynamic Routing")]),t._v(": Routers use dynamic routing protocols (ie. OSPF) to share routing information with each other automatically and build their routing tables.")]),t._v(" "),s("ul",[s("li",[s("p",[s("strong",[t._v("Static Routing")]),t._v(": A network engineer/admin manually configures routes on the router.")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("A route tells the router: to send a packet to destination X, you should send the packet to next-hop Y.")])]),t._v(" "),s("li",[s("p",[t._v("or, if the destination is "),s("em",[t._v("directly connected")]),t._v(" to the router, send the packet directly to the destination.")])]),t._v(" "),s("li",[s("p",[t._v("or, if the destination is the router’s own IP address, receive the packet for itsself (don't forward it further more).")])])])])])])])]),t._v(" "),s("blockquote",[s("p",[t._v("==Routing Table 路由表==存储在Router的RAM中, use the command "),s("code",[t._v("show ip route")]),t._v(" to view the routing table:")]),t._v(" "),s("img",{staticStyle:{zoom:"43%"},attrs:{src:"https://cdn.jsdelivr.net/gh/Jonas-Wolfxin/MyPicgo/img/202303190002713.png",alt:"image-20230319000234375"}}),t._v(" "),s("p",[t._v("The Codes legend in the output of "),s("code",[t._v("show ip route")]),t._v(" lists the different protocols which routers can use to learn routes. When you configure an IP address on an interface and enable it with no shutdown, "),s("strong",[t._v("2 routes (per interface)")]),t._v(" will automatically be added to the routing table:")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("L-local")]),t._v(":  A route to the "),s("em",[t._v("exact IP address configured on the interface")]),t._v(", with a /32 netmask; "),s("strong",[t._v("local")]),t._v(" means "),s("em",[t._v("keep the packet, do not forward")]),t._v(".")]),t._v(" "),s("li",[s("strong",[t._v("C- connected")]),t._v(": A route to the "),s("em",[t._v("network the interface is connected to")]),t._v(", with the actual netmask\nconfigured on the interface. It provides "),s("strong",[t._v("a route to all hosts")]),t._v(" in that network")])]),t._v(" "),s("blockquote",[s("p",[t._v("If a router receives a packet and it doesn’t have a route that matches the packet's destination, it will drop the packet. This is different than switches, which flood frames if they don’t have a MAC table entry for the destination.")])])]),t._v(" "),s("h3",{attrs:{id:"建立路由表项的三种方式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#建立路由表项的三种方式"}},[t._v("#")]),t._v(" 建立路由表项的三种方式:")]),t._v(" "),s("blockquote",[s("h5",{attrs:{id:"直连路由"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#直连路由"}},[t._v("#")]),t._v(" 直连路由:")]),t._v(" "),s("p",[t._v("直接连接在路由器接口上的 "),s("strong",[t._v("Host route")]),t._v(" 和 "),s("strong",[t._v("Network route")]),t._v("。")]),t._v(" "),s("h5",{attrs:{id:"静态路由"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#静态路由"}},[t._v("#")]),t._v(" 静态路由:")]),t._v(" "),s("p",[t._v("手动在路由器上建立的路由条目")]),t._v(" "),s("blockquote",[s("p",[s("strong",[t._v("默认路由 S")]),t._v("*: 对于在路由选择表没有对应项的网络，都将通过默认路由转发出去。使用默认路由容易创建路由环路，因此使用时要特别小心!")])]),t._v(" "),s("ul",[s("li",[t._v("优点:\n"),s("ul",[s("li",[s("p",[t._v("不增加路由器CPU的开销，也就是说使用静态路由不需要运行动态路由协议消耗CPU资源;")])]),t._v(" "),s("li",[s("p",[t._v("不增加路由器间的带宽占用，也就是说在WAN 链接的使用中可以节省更多的费用;")])]),t._v(" "),s("li",[s("p",[t._v("提高了安全性，因为管理员可以有选择地配置路由，使之只通过某些特定的网络;")])])])]),t._v(" "),s("li",[t._v("缺点:\n"),s("ul",[s("li",[t._v("管理员必须真正地了解整个互联网络以及每台路由器间的连接方式，以便实现对这些路由的正确配置;")]),t._v(" "),s("li",[t._v("管理员必须在所有路由器上(手工地)添加或者更新到此网络的路由,")]),t._v(" "),s("li",[t._v("对于大型网络使用静态路由选择基本上是不可行的，因为配置静态路由选择会产生巨大的工作量。")])])])]),t._v(" "),s("h5",{attrs:{id:"动态路由"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#动态路由"}},[t._v("#")]),t._v(" 动态路由:")]),t._v(" "),s("p",[t._v("路由器根据配置的路由协议动态创建维护的路由条目。分类:")]),t._v(" "),s("h6",{attrs:{id:"igp-interior-gateway-protocol-内部网关协议"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#igp-interior-gateway-protocol-内部网关协议"}},[t._v("#")]),t._v(" IGP (Interior Gateway Protocol，内部网关协议):")]),t._v(" "),s("p",[t._v("用于在同一个AS (Autonomous System ，自治系统)中的路由器间交换路由选择信息。而AS 是一个位于共同管理域下的网络集合，其基本原理是将所有需要共享相同的路由选择表信息的路由器置于同一个AS中。")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("距离矢量协议")]),t._v(": 距离矢量协议通过判断距离确定当前到达远程网络的最佳路径。比如"),s("code",[t._v("RIP协议")]),t._v("采用跳数作为度量值")]),t._v(" "),s("li",[s("code",[t._v("链路状态协议")]),t._v(":")]),t._v(" "),s("li",[t._v("路由器将分别创建3个彼此独立的表。其中的一个表用来跟踪直接相连接的邻居，一个用来确定整个互联网络的拓扑结构，而另一个则用作路由选择表。")]),t._v(" "),s("li",[t._v("链路状态路由器要比任一使用距离矢量路由选择协议的路由器了解更多地关于互联网络的情况。")]),t._v(" "),s("li",[t._v("OSPF 是一个完完全全的链路状态路由选择协议。链路状态协议将包含有自身链接状态的更新发送到网络中其他所有直接连接的路由器上，然后再由这些路由器传播到它们的相邻设备。")])]),t._v(" "),s("h6",{attrs:{id:"egp-exterior-gateway-protocol-外部网关协议"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#egp-exterior-gateway-protocol-外部网关协议"}},[t._v("#")]),t._v(" EGP (Exterior Gateway Protocol ，外部网关协议):")]),t._v(" "),s("p",[t._v("用于AS之间的通信。EGP的一个典型示例是BGP (Border Gateway Protocol ，边界网关协议);")])]),t._v(" "),s("blockquote",[s("h5",{attrs:{id:"获取-已配置的ip-route"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#获取-已配置的ip-route"}},[t._v("#")]),t._v(" 获取 已配置的ip route:")]),t._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("Router"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# show running-config | include ip route")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("ul",[s("li",[t._v("使用 Ctrl + Insert 拷贝指定路由后, 便于修改时可直接 Shift + Insert粘贴")])])]),t._v(" "),s("h3",{attrs:{id:"life-of-a-packet"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#life-of-a-packet"}},[t._v("#")]),t._v(" Life of a Packet")]),t._v(" "),s("p",[t._v("视频网址: "),s("a",{attrs:{href:"https://youtu.be/4YrYV2io3as",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://youtu.be/4YrYV2io3as"),s("OutboundLink")],1)]),t._v(" "),s("blockquote",[s("h5",{attrs:{id:"things-to-cover"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#things-to-cover"}},[t._v("#")]),t._v(" Things to cover:")]),t._v(" "),s("ul",[s("li",[t._v("The entire process of sending a packet to a remote destination.")]),t._v(" "),s("li",[t._v("Including ARP, encapsulation, de-encapsulation, etc.")])])]),t._v(" "),s("img",{staticStyle:{zoom:"38%"},attrs:{src:"https://cdn.jsdelivr.net/gh/Jonas-Wolfxin/MyPicgo/img/202303202304170.png",alt:"image-20230320230442944"}}),t._v(" "),s("blockquote",[s("ul",[s("li",[s("strong",[t._v("Each interface on a network device has a unique MAC address")]),t._v(". Note that interfaces on the switch also have MAC addresses, however for this video it’s not necessary to know the MAC addresses of the switches to avoid clutter.")]),t._v(" "),s("li",[t._v("Here to simplify the context, the red route was choosen.")])])]),t._v(" "),s("blockquote",[s("h6",{attrs:{id:"_1-pc1-r1"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-pc1-r1"}},[t._v("#")]),t._v(" 1. PC1 <-> R1:")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("PC1 wants to send a packet to PC4, because PC1’s IP address is in the 192.168.1.0/24 network, it notices that the address 192.168.4.1 is in a different network. so it needs to send the packet to its default gateway, which is R1.")]),t._v(" "),s("img",{staticStyle:{zoom:"33%"},attrs:{src:"https://cdn.jsdelivr.net/gh/Jonas-Wolfxin/MyPicgo/img/202303202316613.png",alt:"image-20230320231605353"}})]),t._v(" "),s("li",[s("p",[t._v("However, in this example PC1 has not sent any traffic yet, so it needs to use ARP to know the MAC Address of R1's interface Gi0/2.")]),t._v(" "),s("img",{staticStyle:{zoom:"38%"},attrs:{src:"https://cdn.jsdelivr.net/gh/Jonas-Wolfxin/MyPicgo/img/202303202316851.png",alt:"image-20230320231643719"}})]),t._v(" "),s("li",[s("p",[t._v("SW1 receives and broadcasts the "),s("strong",[t._v("ARP Request")]),t._v(" out of all its interfaces except the one it received the frame on. SW1 learns PC1’s MAC address on its G0/1 interface when the frame arrives on its G0/1.")])]),t._v(" "),s("li",[s("p",[t._v("R1 receives the "),s("strong",[t._v("ARP Request")]),t._v(" and then creates this "),s("strong",[t._v("ARP reply")]),t._v(" frame to unicast back to PC1.")]),t._v(" "),s("img",{staticStyle:{zoom:"38%"},attrs:{src:"https://cdn.jsdelivr.net/gh/Jonas-Wolfxin/MyPicgo/img/202303202323990.png",alt:"image-20230320232337870"}})]),t._v(" "),s("li",[s("p",[t._v("So, now PC1 knows the MAC address of its default gateway, so it encapsulates the packet with this Ethernet Header.")]),t._v(" "),s("img",{staticStyle:{zoom:"36%"},attrs:{src:"https://cdn.jsdelivr.net/gh/Jonas-Wolfxin/MyPicgo/img/202303202324956.png",alt:"image-20230320232457840"}})])]),t._v(" "),s("h6",{attrs:{id:"_2-r1-r2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-r1-r2"}},[t._v("#")]),t._v(" 2. R1 <-> R2:")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("R1 receives the Packet, and removes the Ethernet Header. It looks up the destination in its routing table.")]),t._v(" "),s("img",{staticStyle:{zoom:"36%"},attrs:{src:"https://cdn.jsdelivr.net/gh/Jonas-Wolfxin/MyPicgo/img/202303202329152.png",alt:"image-20230320232951039"}})]),t._v(" "),s("li",[s("p",[t._v("So, R1 will have to encapsulate this packet with an Ethernet frame with the appropriate MAC address for 192.168.12.2. However, R1 doesn’t know R2’s MAC address yet.  So, R1 use ARP again.")]),t._v(" "),s("img",{staticStyle:{zoom:"38%"},attrs:{src:"https://cdn.jsdelivr.net/gh/Jonas-Wolfxin/MyPicgo/img/202303202332646.png",alt:"image-20230320233202523"}})]),t._v(" "),s("li",[s("p",[t._v("R2 receives the broadcast, and since the destination IP address matches its own IP address, it makes this ARP reply to unicast to R1.")]),t._v(" "),s("img",{staticStyle:{zoom:"38%"},attrs:{src:"https://cdn.jsdelivr.net/gh/Jonas-Wolfxin/MyPicgo/img/202303202336279.png",alt:"image-20230320233612124"}})]),t._v(" "),s("li",[s("p",[t._v("now R1 knows R2’s MAC address, so it can encapsulate the packet with an Ethernet Header")]),t._v(" "),s("img",{staticStyle:{zoom:"38%"},attrs:{src:"https://cdn.jsdelivr.net/gh/Jonas-Wolfxin/MyPicgo/img/202303202337209.png",alt:"image-20230320233724083"}})])]),t._v(" "),s("h6",{attrs:{id:"_3-r2-r4"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-r2-r4"}},[t._v("#")]),t._v(" 3. R2 <-> R4")]),t._v(" "),s("p",[t._v("same as the last stage")]),t._v(" "),s("img",{staticStyle:{zoom:"33%"},attrs:{src:"https://cdn.jsdelivr.net/gh/Jonas-Wolfxin/MyPicgo/img/202303202342941.png",alt:"image-20230320234217834"}}),t._v(" "),s("h6",{attrs:{id:"_4-r4-pc4"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-r4-pc4"}},[t._v("#")]),t._v(" 4. R4 <-> PC4")]),t._v(" "),s("p",[t._v("similar with the first stage")]),t._v(" "),s("img",{staticStyle:{zoom:"33%"},attrs:{src:"https://cdn.jsdelivr.net/gh/Jonas-Wolfxin/MyPicgo/img/202303202345445.png",alt:"image-20230320234516322"}}),t._v(" "),s("h5",{attrs:{id:"question"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#question"}},[t._v("#")]),t._v(" Question?")]),t._v(" "),s("p",[t._v("If PC4 sends a reply back to PC1 in the case of preconfigured static routes on the routers so that the traffic follows the same path on the way back to PC1, going via SW4, R4, R2, R1, SW1, and then PC1. What will be different?")]),t._v(" "),s("ul",[s("li",[t._v("Since these nodes("),s("code",[t._v("Router#show arp")]),t._v(", "),s("code",[t._v("windows>arp -a")]),t._v(", "),s("code",[t._v("SW#show mac address-table")]),t._v(") have already gone through the ARP process, there won’t be any need for ARP requests and replies, the packet will simply be forwarded from device to device, being de-encapsulated and then re-enapsulated as it is received by and then forwarded by each router.")])])]),t._v(" "),s("blockquote",[s("p",[s("strong",[t._v("Keep in mind:")])]),t._v(" "),s("ul",[s("li",[t._v("The original "),s("strong",[t._v("Packet")]),t._v(" is not changed along the whole path: the destination address remains PC4’s IP, the source address remains PC1’s IP.")]),t._v(" "),s("li",[t._v("The "),s("strong",[t._v("Ethernet Frames")]),t._v(" between different "),s("strong",[t._v("Layer3-nodes")]),t._v(" are changed.")]),t._v(" "),s("li",[t._v("The switches forwarded the frames and learned the MAC addresses, but "),s("strong",[t._v("DO NOT")]),t._v(" actually modify the frames at any point(which means that de-encapsulate and then re-encapsulate the packet with a new ethernet header.).")])])]),t._v(" "),s("h2",{attrs:{id:"static-route"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#static-route"}},[t._v("#")]),t._v(" Static Route")]),t._v(" "),s("h3",{attrs:{id:"设置静态路由语法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#设置静态路由语法"}},[t._v("#")]),t._v(" 设置静态路由语法:")]),t._v(" "),s("blockquote",[s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ip")]),t._v(" route Destination_Network_or_IP Netmask  Exitinterface_OR_next-hop_IP "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("administrative_distance"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("permanent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" \n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("ul",[s("li",[s("p",[s("code",[t._v("ip route")]),t._v(" 用于创建静态路由的命令;")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("destination_network")]),t._v(" 要放置到路由选择表中的网络号。")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("mask")]),t._v(" 在此网络上使用的子网掩码。")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("exitinterface")]),t._v("  本路由器到下一跳路由器的出口; "),s("code",[t._v("next-hop_address")]),t._v(" 下一跳路由器上与本路由器直接相连的接口的IP地址;")]),t._v(" "),s("blockquote",[s("ul",[s("li",[t._v("两者可以任选其一, 也可以同时配置上;")]),t._v(" "),s("li",[s("strong",[t._v("Static routes in which you specify only the exit-interface")]),t._v(" rely on a feature called "),s("strong",[t._v("Proxy ARP")]),t._v(" to function. This is usually not a problem, but generally you can stick to "),s("em",[t._v("next-hop Or exit-interface next-hop")]),t._v(".")]),t._v(" "),s("li",[t._v("Static routes in which you specify only the ["),s("strong",[t._v("exit-interface")]),t._v("] appear as "),s("em",[t._v("directly-connected")]),t._v(" in the routing table.")])])])]),t._v(" "),s("li",[s("p",[s("code",[t._v("administrative_distance")]),t._v(" 默认情况下，静态路由的管理距离为1 (甚至可以是0，前提是使用输出接口(exitinterface) 替代下一跳地址)")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("permanent")]),t._v(" 如果接口被关闭或者路由器不能与下一跳路由器通信，默认情况下这一路由将会被从路由选择表中自动删除。选择permanent 选项，将导致在任意情况下都保留这一路由选择表项在路由选择表中。")])])])]),t._v(" "),s("p",[t._v("取消该条路由:")]),t._v(" "),s("ul",[s("li",[t._v("思科: "),s("code",[t._v("no ip route 192.168.2.0 255.255.255.0 e0/1 12.1.1.2")]),t._v(";")]),t._v(" "),s("li",[t._v("华为: "),s("code",[t._v("undo ip route 192.168.2.0 255.255.255.0 e0/1 12.1.1.2")]),t._v(";")])]),t._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("R1"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#sh ip route ")]),t._v("\nCodes: L - local, C - connected, S - static, "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n\nGateway of last resort is not "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("set")]),t._v("\n\n      "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("12.0")]),t._v(".0.0/8 is variably subnetted, "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" subnets, "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" masks\nC        "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("12.1")]),t._v(".1.0/30 is directly connected, Ethernet0/0\nL        "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("12.1")]),t._v(".1.1/32 is directly connected, Ethernet0/0\n\nR1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("config"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#ip route 192.168.2.0 255.255.255.0 12.1.1.2  # 设置静态路由")]),t._v("\n\nR1"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#sh ip route ")]),t._v("\nCodes: L - local, C - connected, S - static, "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n\nGateway of last resort is not "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("set")]),t._v("\n\n      "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("12.0")]),t._v(".0.0/8 is variably subnetted, "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" subnets, "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" masks\nC        "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("12.1")]),t._v(".1.0/30 is directly connected, Ethernet0/0\nL        "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("12.1")]),t._v(".1.1/32 is directly connected, Ethernet0/0\nS     "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),t._v(".2.0/24 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("/0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" via "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("12.1")]),t._v(".1.2\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br"),s("span",{staticClass:"line-number"},[t._v("19")]),s("br"),s("span",{staticClass:"line-number"},[t._v("20")]),s("br")])]),s("blockquote",[s("ul",[s("li",[s("p",[t._v("To send a packet to a destination, does a router need a route to every network in the path to the destination? "),s("strong",[t._v("No, It only needs a route to the destination network, as you can find in the "),s("a",{attrs:{href:"#Example:"}},[t._v("Example")]),t._v(".")])])]),t._v(" "),s("li",[s("p",[t._v("对指定的网络或IP地址设置2个静态路由, 可实现 Load Balance.  如图:")]),t._v(" "),s("img",{staticStyle:{zoom:"33%"},attrs:{src:"https://cdn.jsdelivr.net/gh/Jonas-Wolfxin/MyPicgo/img/202303301530497.png",alt:"image-20230330153020114"}}),t._v(" "),s("blockquote",[s("p",[t._v("但是, 若其中一条路径出现故障, 由于静态路由固定了负载均衡机制, 就会出现大量丢包的现象(丢包率: 故障路径数/负载均衡总路径数).")])])])])]),t._v(" "),s("h3",{attrs:{id:"example"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[t._v("#")]),t._v(" Example:")]),t._v(" "),s("img",{staticStyle:{zoom:"67%"},attrs:{src:"https://cdn.jsdelivr.net/gh/Jonas-Wolfxin/MyPicgo/img/202303192110838.png",alt:"image-20230319211035460"}}),t._v(" "),s("img",{staticStyle:{zoom:"43%"},attrs:{src:"https://cdn.jsdelivr.net/gh/Jonas-Wolfxin/MyPicgo/img/202303192112941.png",alt:"image-20230319211233723"}}),t._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("R1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("config"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ip route 192.168.4.0 255.255.255.0 192.168.13.3")]),t._v("\n\nR3"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("config"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ip route 192.168.1.0 255.255.255.8 192.168.13.1 ")]),t._v("\nR3"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("config"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ip route 192.168.4.8 255.255.255.8 g0/1 192.168.34.4")]),t._v("\n\nR4"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("config"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ip route 192.168.1.0 255.255.255.0 g0/1")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br")])]),s("blockquote",[s("ul",[s("li",[s("p",[t._v("The [1/0] displayed in static routes means: [Administrative Distance/Metric].")]),t._v(" "),s("img",{staticStyle:{zoom:"38%"},attrs:{src:"https://cdn.jsdelivr.net/gh/Jonas-Wolfxin/MyPicgo/img/202303192123520.png",alt:"image-20230319212320197"}})])])]),t._v(" "),s("img",{staticStyle:{zoom:"53%"},attrs:{src:"https://cdn.jsdelivr.net/gh/Jonas-Wolfxin/MyPicgo/img/202303192128923.png",alt:"image-20230319212829682"}}),t._v(" "),s("h3",{attrs:{id:"配置-loopback-路由"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置-loopback-路由"}},[t._v("#")]),t._v(" 配置 loopback 路由")]),t._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("R3"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("config"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#interface loopback ?")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("-214748364"),s("span",{pre:!0,attrs:{class:"token operator"}},[s("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[t._v("7")]),t._v(">")]),t._v("  Loopback interface number\n  \nR1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("config"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#interface loopback 0")]),t._v("\nR1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("config-if"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#")]),t._v("\n*Jun "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("18")]),t._v(" 08:53:05.949: %LINEPROTO-5-UPDOWN: Line protocol on Interface Loopback0, changed state to up\nR1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("config-if"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#ip address 192.168.10.1 255.255.255.0")]),t._v("\nR1"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#show ip interface brief ")]),t._v("\nInterface                  IP-Address      OK? Method Status                Protocol\nEthernet0/0                "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("12.1")]),t._v(".1.1        YES NVRAM  up                    up     \nEthernet0/1                unassigned      YES "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("unset")]),t._v("  administratively down down   \nEthernet0/2                unassigned      YES NVRAM  administratively down down   \nEthernet0/3                unassigned      YES NVRAM  administratively down down   \nLoopback0                  "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),t._v(".10.1    YES manual up                    up \n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br")])]),s("h3",{attrs:{id:"静态路由的汇总"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#静态路由的汇总"}},[t._v("#")]),t._v(" 静态路由的汇总")]),t._v(" "),s("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://cdn.jsdelivr.net/gh/Wolfxin/MyPicGo/img/image-20220618124808186.png",alt:"image-20220618124808186"}}),t._v(" "),s("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://cdn.jsdelivr.net/gh/Wolfxin/MyPicGo/img/image-20220618124855027.png",alt:"image-20220618124855027"}}),t._v(" "),s("h2",{attrs:{id:"default-route"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#default-route"}},[t._v("#")]),t._v(" Default Route")]),t._v(" "),s("blockquote",[s("ul",[s("li",[s("p",[t._v("The "),s("strong",[t._v("default gateway")]),t._v(" configuration is also called a "),s("strong",[t._v("default route")]),t._v(". It is a route to "),s("em",[t._v("0.0.0.0/0")]),t._v(" = all netmask bits set to 0. Includes "),s("strong",[t._v("all addresses")]),t._v(" from 0.0.0.0 to 255.255.255.255.")]),t._v(" "),s("blockquote",[s("ul",[s("li",[s("strong",[t._v("The default route")]),t._v(" is "),s("strong",[t._v("the least specific")]),t._v(" route possible, because it includes all IP addresses. 0.0.0.0/0 = 4,294,967,296 IP addresses")]),t._v(" "),s("li",[s("strong",[t._v("A /32 route")]),t._v(" (ie. Local route) is the most specific route possible, because it specifies only one IP address.  192.168.1.1/32 = 1 IP address")])])])]),t._v(" "),s("li",[s("p",[t._v("是静态路由的特殊形式, 一般设置在"),s("code",[t._v("存根路由器")]),t._v("或者"),s("code",[t._v("连接WAN的路由器")]),t._v("上;")]),t._v(" "),s("blockquote",[s("p",[t._v("存根路由器(stub router)。存根表示这个示例中的网络只有通往所有其他网络的一条路径。")])])]),t._v(" "),s("li",[s("p",[t._v("对于在路由选择表没有对应表项的网络，都将通过默认路由转发出去。A default route is often used to direct traffic to the Internet.")])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("Gateway of last resort is not set")]),t._v(" in the "),s("code",[t._v("show ip route")]),t._v(" command means that "),s("em",[t._v("No default route has been conifgured yet")]),t._v(". ‘Gateway of last resort’ is another name for ‘default gateway’.")])]),t._v(" "),s("li",[s("p",[t._v("使用默认路由容易创建路由环路，因此使用时要特别小心!")]),t._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("R3"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("config"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#ip route 0.0.0.0 0.0.0.0 Next_Hop")]),t._v("\nR3"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("config"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#ip classless")]),t._v("\nR3"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("config"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#do show ip route")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("blockquote",[s("ul",[s("li",[t._v("几乎所有思科路由器都是有类路由器，也就是说，路由器的每个接口预设使用默认的子网掩码。当路由器接收到一个目的子网不在路由选择表中的分组时，默认将丢弃这个分组。因此，如果在配置中使用了默认路由选择，这里就必须使用"),s("code",[t._v("ip classless")]),t._v("命令;")]),t._v(" "),s("li",[t._v("IOS 版本为12.4，默认情况下这个"),s("code",[t._v("ip classless")]),t._v(" 命令处于启用状态，因此在配置中可以不执行这个命令。在配置默认路由选择时，如果没有执行过这个命令，并且对路由器进行过子网划分，那么就需要添加这个命令。")])])])])])]),t._v(" "),s("h3",{attrs:{id:"example-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example-2"}},[t._v("#")]),t._v(" Example")]),t._v(" "),s("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://cdn.jsdelivr.net/gh/Jonas-Wolfxin/MyPicgo/img/202303192147343.png",alt:"image-20230319214723006"}}),t._v(" "),s("blockquote",[s("p",[s("strong",[t._v("Notice")]),t._v(":")]),t._v(" "),s("ul",[s("li",[t._v("next to the S code indicating that it’s a static route, there is an asterisk*****. In the codes legend it says that the asterisk means "),s("em",[t._v("candidate default")]),t._v(".")]),t._v(" "),s("li",[t._v("It means this route is a candidate to become the router’s default route. In this case there’s only this one, and here it states “"),s("em",[t._v("Gateway of last resort is 203.0.113.2 to network 0.0.0.0")]),t._v("”, so the route we configured was indeed selected.")])])]),t._v(" "),s("h3",{attrs:{id:"ip-default-network-network-地址"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ip-default-network-network-地址"}},[t._v("#")]),t._v(" "),s("code",[t._v("ip default-network Network_地址")])]),t._v(" "),s("blockquote",[s("p",[t._v("如果你在互联网络中已经配置好了最终网关，命令"),s("code",[t._v("ip default-network Network_地址")]),t._v("会是另一个非常有用的命令.")]),t._v(" "),s("p",[t._v("一个需要使用最终网关配置语句的示例:")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/Jonas-Wolfxin/MyPicGo/img/202207071305104.png",alt:"image-20220707124138160"}})]),t._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("Gateway"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("config"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#ip default-network 217.124.6.0")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("ul",[s("li",[t._v("当对路由器配置了一个IGP (Interior Gateway Protocol ，内部网关协议)时，如RIP ，命令"),s("code",[t._v("ip default-network")]),t._v("将会在边界路由器上通告这个默认网络的信息。这样，此互联网络中的其他路由器 将接收这个信息，并自动地设置这个路由为默认路由。")]),t._v(" "),s("li",[t._v("It is important to note that the "),s("code",[t._v("ip default-network")]),t._v(" command is considered legacy and has been replaced by the more flexible and powerful "),s("code",[t._v("ip default-gateway")]),t._v(' command. The "ip default-gateway" command can be used to set the default gateway for a router, without having to specify a specific network address.')])])])])}),[],!1,null,null,null);e.default=n.exports}}]);