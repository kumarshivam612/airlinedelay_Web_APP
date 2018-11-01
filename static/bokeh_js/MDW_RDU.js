document.addEventListener("DOMContentLoaded", function(event) {
    
    (function(global) {
      function now() {
        return new Date();
      }
    
      var force = "";
    
      if (typeof (window._bokeh_onload_callbacks) === "undefined" || force !== "") {
        window._bokeh_onload_callbacks = [];
        window._bokeh_is_loading = undefined;
      }
    
    
      
      
    
      function run_callbacks() {
        window._bokeh_onload_callbacks.forEach(function(callback) { callback() });
        delete window._bokeh_onload_callbacks
        console.info("Bokeh: all callbacks have finished");
      }
    
      function load_libs(js_urls, callback) {
        window._bokeh_onload_callbacks.push(callback);
        if (window._bokeh_is_loading > 0) {
          console.log("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.log("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        window._bokeh_is_loading = js_urls.length;
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var s = document.createElement('script');
          s.src = url;
          s.async = false;
          s.onreadystatechange = s.onload = function() {
            window._bokeh_is_loading--;
            if (window._bokeh_is_loading === 0) {
              console.log("Bokeh: all BokehJS libraries loaded");
              run_callbacks()
            }
          };
          s.onerror = function() {
            console.warn("failed to load library " + url);
          };
          console.log("Bokeh: injecting script tag for BokehJS library: ", url);
          document.getElementsByTagName("head")[0].appendChild(s);
        }
      };var element = document.getElementById("ea76672e-5ec7-493e-b4f7-15c151be8679");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'ea76672e-5ec7-493e-b4f7-15c151be8679' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ['https://cdn.pydata.org/bokeh/release/bokeh-0.12.3.min.js', 'https://cdn.pydata.org/bokeh/release/bokeh-widgets-0.12.3.min.js'];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          Bokeh.$(function() {
              Bokeh.safely(function() {
                  var docs_json = {"153c6c0c-26eb-4475-9417-2ae5be243fab":{"roots":{"references":[{"attributes":{"plot":{"id":"6e27e32e-9abb-4a7e-a38f-80de92f6cbfe","subtype":"Chart","type":"Plot"}},"id":"8eb8c90f-f269-452b-88aa-94556bf1fc59","type":"SaveTool"},{"attributes":{"color_mapper":{"id":"d5c3cf56-3dd7-4d25-ae28-2b22e35b6de8","type":"LinearColorMapper"},"formatter":{"id":"f06761f2-1ecd-44ec-a839-18692e2d97bb","type":"BasicTickFormatter"},"label_standoff":12,"location":[0,0],"plot":{"id":"6e27e32e-9abb-4a7e-a38f-80de92f6cbfe","subtype":"Chart","type":"Plot"},"ticker":{"id":"81c03964-e5dd-431d-8c46-93ca1615c043","type":"BasicTicker"}},"id":"80442fce-7c98-4184-802b-682b822a38bb","type":"ColorBar"},{"attributes":{"plot":null,"text":"Average Flight Delays"},"id":"d80bd021-99ff-45ad-be4b-a91563dd6d28","type":"Title"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(26.7, 30]","(26.7, 30]","(26.7, 30]","(26.7, 30]","(26.7, 30]","(26.7, 30]","(26.7, 30]","(26.7, 30]","(26.7, 30]","(26.7, 30]","(26.7, 30]","(26.7, 30]","(26.7, 30]"],"chart_index":[{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"},{"POS_ARR_DELAY":"(26.7, 30]"}],"values":[29.25,30.0,30.0,30.0,30.0,30.0,30.0,27.666666666666668,30.0,29.291666666666668,30.0,30.0,30.0],"x":[15,19,16,15,16,19,19,15,18,21,15,17,19],"y":["Monday","Monday","Tuesday","Wednesday","Wednesday","Wednesday","Thursday","Friday","Saturday","Saturday","Sunday","Sunday","Sunday"]}},"id":"ccea508f-0e74-411f-8162-42fbcb6fbcd3","type":"ColumnDataSource"},{"attributes":{},"id":"f06761f2-1ecd-44ec-a839-18692e2d97bb","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"7608f990-2a10-4755-9a87-52e2c8d81479","type":"ColumnDataSource"},"glyph":{"id":"597c0800-d22f-4184-8171-bc8d3ea04c8f","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"59c3dc53-ec9a-4d40-abe5-d5ae36af9035","type":"GlyphRenderer"},{"attributes":{"callback":null,"tabs":[{"id":"587da150-07b1-4c33-a9bb-4bb8fa0f6cd1","type":"Panel"}]},"id":"dee25f5a-af61-4dc5-8720-0bb83419c316","type":"Tabs"},{"attributes":{"axis_label":"Day of the Week","formatter":{"id":"ffda3141-bc9a-41d2-8a9b-1c9f0275cc20","type":"CategoricalTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"6e27e32e-9abb-4a7e-a38f-80de92f6cbfe","subtype":"Chart","type":"Plot"},"ticker":{"id":"56af354b-0bea-460b-b675-4a5729b20330","type":"CategoricalTicker"}},"id":"9b4ff615-04aa-41d4-a944-33fefb664b39","type":"CategoricalAxis"},{"attributes":{"data_source":{"id":"d88665ae-bf07-4fc8-96a2-eb1f1bfaf8a8","type":"ColumnDataSource"},"glyph":{"id":"200ce9fd-50c1-415b-b3b3-db9a1f0969e5","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"104fa05c-c64a-45e1-98d4-b58de38d63eb","type":"GlyphRenderer"},{"attributes":{"callback":null,"factors":["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]},"id":"3842ab69-b2fc-4f5c-8012-e1f531747480","type":"FactorRange"},{"attributes":{"data_source":{"id":"53226f1d-6687-4a6d-b0e9-a16b27302f24","type":"ColumnDataSource"},"glyph":{"id":"34d85845-a647-4ad0-bb11-92a52c4cb5f4","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"997f27a0-d8b6-4506-b53f-051ad511e870","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"6e27e32e-9abb-4a7e-a38f-80de92f6cbfe","subtype":"Chart","type":"Plot"}},"id":"34d135bc-d146-4f9c-aa5b-c61d8b7201bb","type":"ResetTool"},{"attributes":{"dilate":true,"fill_color":{"value":"#7f0000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#7f0000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"d0d74e6d-2bdb-4ad9-8de9-f15fbaab64e3","type":"Rect"},{"attributes":{},"id":"56af354b-0bea-460b-b675-4a5729b20330","type":"CategoricalTicker"},{"attributes":{"overlay":{"id":"700efeaa-0069-4b3a-9a4c-66d66fd160bc","type":"BoxAnnotation"},"plot":{"id":"6e27e32e-9abb-4a7e-a38f-80de92f6cbfe","subtype":"Chart","type":"Plot"}},"id":"985c48f1-bc26-45fa-a569-cda8bac13276","type":"BoxZoomTool"},{"attributes":{"dilate":true,"fill_color":{"value":"#d7301f"},"height":{"units":"data","value":0.95},"line_color":{"value":"#d7301f"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"bd751aec-b8ee-4036-812c-218fc5c09e39","type":"Rect"},{"attributes":{"dilate":true,"fill_color":{"value":"#ef6548"},"height":{"units":"data","value":0.95},"line_color":{"value":"#ef6548"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"a09dcb97-4e50-4aba-bec1-81e5b497fb7f","type":"Rect"},{"attributes":{"dilate":true,"fill_color":{"value":"#fee8c8"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fee8c8"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"597c0800-d22f-4184-8171-bc8d3ea04c8f","type":"Rect"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]","[-0.03, 3.3]"],"chart_index":[{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"},{"POS_ARR_DELAY":"[-0.03, 3.3]"}],"values":[3.111111111111111,0.0,2.5454545454545454,0.0,3.0,3.1739130434782608,3.227272727272727,1.6,2.7555555555555555,0.0,2.25,0.0,0.0,2.090909090909091,0.0,0.4117647058823529,0.8518518518518519,1.5384615384615385],"x":[6,17,8,17,17,7,8,7,9,17,19,7,8,10,16,6,7,8],"y":["Monday","Monday","Tuesday","Tuesday","Wednesday","Thursday","Thursday","Friday","Friday","Friday","Friday","Saturday","Saturday","Saturday","Saturday","Sunday","Sunday","Sunday"]}},"id":"53226f1d-6687-4a6d-b0e9-a16b27302f24","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"6e27e32e-9abb-4a7e-a38f-80de92f6cbfe","subtype":"Chart","type":"Plot"}},"id":"0a404dc5-8327-4f99-b5db-0d693d33caa1","type":"HelpTool"},{"attributes":{},"id":"2b53eed8-43b1-4fa0-a0ea-0ba70d800665","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"f9737cb7-bf08-49ec-a496-163fc0eed57c","type":"ColumnDataSource"},"glyph":{"id":"bd751aec-b8ee-4036-812c-218fc5c09e39","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"16332c0a-6e44-4269-9a49-e3e179fda518","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(23.3, 26.7]","(23.3, 26.7]","(23.3, 26.7]","(23.3, 26.7]","(23.3, 26.7]"],"chart_index":[{"POS_ARR_DELAY":"(23.3, 26.7]"},{"POS_ARR_DELAY":"(23.3, 26.7]"},{"POS_ARR_DELAY":"(23.3, 26.7]"},{"POS_ARR_DELAY":"(23.3, 26.7]"},{"POS_ARR_DELAY":"(23.3, 26.7]"}],"values":[24.75,26.484848484848484,26.606060606060606,24.884615384615383,23.548387096774192],"x":[16,20,20,16,19],"y":["Monday","Tuesday","Thursday","Friday","Saturday"]}},"id":"5b98c483-0ec1-4649-9f71-007bbd240f2f","type":"ColumnDataSource"},{"attributes":{},"id":"cf7c4751-1c86-454c-8e0f-ba415c2b23ed","type":"BasicTicker"},{"attributes":{"data_source":{"id":"5b98c483-0ec1-4649-9f71-007bbd240f2f","type":"ColumnDataSource"},"glyph":{"id":"3cc778d6-9269-46b7-8231-a5d6ed20e4c9","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"012ae2a1-3b56-4a58-948f-156f8c194085","type":"GlyphRenderer"},{"attributes":{},"id":"81c03964-e5dd-431d-8c46-93ca1615c043","type":"BasicTicker"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(20, 23.3]","(20, 23.3]","(20, 23.3]","(20, 23.3]","(20, 23.3]"],"chart_index":[{"POS_ARR_DELAY":"(20, 23.3]"},{"POS_ARR_DELAY":"(20, 23.3]"},{"POS_ARR_DELAY":"(20, 23.3]"},{"POS_ARR_DELAY":"(20, 23.3]"},{"POS_ARR_DELAY":"(20, 23.3]"}],"values":[22.529411764705884,21.333333333333332,21.0,20.176470588235293,20.571428571428573],"x":[20,15,18,20,20],"y":["Wednesday","Thursday","Friday","Friday","Sunday"]}},"id":"f9737cb7-bf08-49ec-a496-163fc0eed57c","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"3d8ce059-0d34-40a1-80e6-455e829907da","type":"ColumnDataSource"},"glyph":{"id":"ee8e94e3-95e6-483b-a27b-df76a3e3ff34","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"a4393f47-2fe2-4549-b746-813bf21c6dc9","type":"GlyphRenderer"},{"attributes":{"callback":null,"end":23},"id":"bfb011d3-0d8f-46ec-9665-3bca5ce81317","type":"Range1d"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(16.7, 20]","(16.7, 20]","(16.7, 20]","(16.7, 20]","(16.7, 20]","(16.7, 20]","(16.7, 20]","(16.7, 20]","(16.7, 20]","(16.7, 20]"],"chart_index":[{"POS_ARR_DELAY":"(16.7, 20]"},{"POS_ARR_DELAY":"(16.7, 20]"},{"POS_ARR_DELAY":"(16.7, 20]"},{"POS_ARR_DELAY":"(16.7, 20]"},{"POS_ARR_DELAY":"(16.7, 20]"},{"POS_ARR_DELAY":"(16.7, 20]"},{"POS_ARR_DELAY":"(16.7, 20]"},{"POS_ARR_DELAY":"(16.7, 20]"},{"POS_ARR_DELAY":"(16.7, 20]"},{"POS_ARR_DELAY":"(16.7, 20]"}],"values":[16.818181818181817,19.75,16.855855855855857,16.8,19.92,18.028846153846153,18.936936936936938,19.833333333333332,16.971698113207548,19.181818181818183],"x":[20,19,21,22,16,21,21,14,21,22],"y":["Monday","Tuesday","Tuesday","Wednesday","Thursday","Thursday","Friday","Saturday","Sunday","Sunday"]}},"id":"a4baf5ff-c04a-4009-bb46-70ee982d5ca8","type":"ColumnDataSource"},{"attributes":{"high":30,"low":0,"palette":["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"]},"id":"d5c3cf56-3dd7-4d25-ae28-2b22e35b6de8","type":"LinearColorMapper"},{"attributes":{"dilate":true,"fill_color":{"value":"#fdbb84"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fdbb84"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"ee8e94e3-95e6-483b-a27b-df76a3e3ff34","type":"Rect"},{"attributes":{"data_source":{"id":"ee2c1372-89a6-430d-aca9-e3761488bd5b","type":"ColumnDataSource"},"glyph":{"id":"bbaef363-8b0d-4caa-a7e5-edaae9deef24","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"b80484d5-e6bf-4e83-bbf2-0253df8c247f","type":"GlyphRenderer"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"700efeaa-0069-4b3a-9a4c-66d66fd160bc","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"6e27e32e-9abb-4a7e-a38f-80de92f6cbfe","subtype":"Chart","type":"Plot"}},"id":"3cab8414-d726-45c0-84c9-ab01d2bd1d24","type":"WheelZoomTool"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"01f5834f-0cdf-4e0b-be10-d0a7faa00027","type":"PanTool"},{"id":"3cab8414-d726-45c0-84c9-ab01d2bd1d24","type":"WheelZoomTool"},{"id":"985c48f1-bc26-45fa-a569-cda8bac13276","type":"BoxZoomTool"},{"id":"8eb8c90f-f269-452b-88aa-94556bf1fc59","type":"SaveTool"},{"id":"34d135bc-d146-4f9c-aa5b-c61d8b7201bb","type":"ResetTool"},{"id":"0a404dc5-8327-4f99-b5db-0d693d33caa1","type":"HelpTool"}]},"id":"540c346e-03f6-4fdd-8de3-cf88f30962ab","type":"Toolbar"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]","(3.3, 6.7]"],"chart_index":[{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"},{"POS_ARR_DELAY":"(3.3, 6.7]"}],"values":[5.088888888888889,3.3617021276595747,6.5813953488372094,4.333333333333333,4.277777777777778,5.125,4.333333333333333,6.15,3.5555555555555554,6.571428571428571,5.375],"x":[7,7,9,6,8,22,6,8,6,9,16],"y":["Monday","Tuesday","Tuesday","Wednesday","Wednesday","Thursday","Friday","Friday","Saturday","Sunday","Sunday"]}},"id":"7608f990-2a10-4755-9a87-52e2c8d81479","type":"ColumnDataSource"},{"attributes":{},"id":"dcdd4b10-541e-46be-8b6b-0dc5818f60ae","type":"ToolEvents"},{"attributes":{"background_fill_alpha":{"value":0.8},"below":[{"id":"1c8c3b8d-965e-4d21-94d6-0947afb698ee","type":"LinearAxis"}],"left":[{"id":"9b4ff615-04aa-41d4-a944-33fefb664b39","type":"CategoricalAxis"}],"plot_height":330,"renderers":[{"id":"700efeaa-0069-4b3a-9a4c-66d66fd160bc","type":"BoxAnnotation"},{"id":"6f1a7c28-06d9-4965-a0b2-55c96ebe40c2","type":"GlyphRenderer"},{"id":"012ae2a1-3b56-4a58-948f-156f8c194085","type":"GlyphRenderer"},{"id":"16332c0a-6e44-4269-9a49-e3e179fda518","type":"GlyphRenderer"},{"id":"1dc4a968-8abe-4f9b-82cd-535e4eab85d9","type":"GlyphRenderer"},{"id":"104fa05c-c64a-45e1-98d4-b58de38d63eb","type":"GlyphRenderer"},{"id":"a4393f47-2fe2-4549-b746-813bf21c6dc9","type":"GlyphRenderer"},{"id":"b80484d5-e6bf-4e83-bbf2-0253df8c247f","type":"GlyphRenderer"},{"id":"59c3dc53-ec9a-4d40-abe5-d5ae36af9035","type":"GlyphRenderer"},{"id":"997f27a0-d8b6-4506-b53f-051ad511e870","type":"GlyphRenderer"},{"id":"1c8c3b8d-965e-4d21-94d6-0947afb698ee","type":"LinearAxis"},{"id":"9b4ff615-04aa-41d4-a944-33fefb664b39","type":"CategoricalAxis"},{"id":"80442fce-7c98-4184-802b-682b822a38bb","type":"ColorBar"}],"right":[{"id":"80442fce-7c98-4184-802b-682b822a38bb","type":"ColorBar"}],"title":{"id":"d80bd021-99ff-45ad-be4b-a91563dd6d28","type":"Title"},"tool_events":{"id":"dcdd4b10-541e-46be-8b6b-0dc5818f60ae","type":"ToolEvents"},"toolbar":{"id":"540c346e-03f6-4fdd-8de3-cf88f30962ab","type":"Toolbar"},"toolbar_location":"above","width":600,"x_mapper_type":"auto","x_range":{"id":"bfb011d3-0d8f-46ec-9665-3bca5ce81317","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"3842ab69-b2fc-4f5c-8012-e1f531747480","type":"FactorRange"}},"id":"6e27e32e-9abb-4a7e-a38f-80de92f6cbfe","subtype":"Chart","type":"Plot"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(10, 13.3]","(10, 13.3]","(10, 13.3]","(10, 13.3]","(10, 13.3]","(10, 13.3]","(10, 13.3]","(10, 13.3]","(10, 13.3]","(10, 13.3]","(10, 13.3]","(10, 13.3]"],"chart_index":[{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"},{"POS_ARR_DELAY":"(10, 13.3]"}],"values":[12.227272727272727,11.13953488372093,10.5,11.4,10.319444444444445,12.479166666666666,10.517241379310345,12.66225165562914,12.0,12.569767441860465,13.333333333333334,10.852112676056338],"x":[8,10,15,10,13,13,13,13,15,20,22,13],"y":["Monday","Monday","Tuesday","Wednesday","Wednesday","Thursday","Friday","Saturday","Saturday","Saturday","Saturday","Sunday"]}},"id":"3d8ce059-0d34-40a1-80e6-455e829907da","type":"ColumnDataSource"},{"attributes":{"dilate":true,"fill_color":{"value":"#fff7ec"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fff7ec"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"34d85845-a647-4ad0-bb11-92a52c4cb5f4","type":"Rect"},{"attributes":{"plot":{"id":"6e27e32e-9abb-4a7e-a38f-80de92f6cbfe","subtype":"Chart","type":"Plot"}},"id":"01f5834f-0cdf-4e0b-be10-d0a7faa00027","type":"PanTool"},{"attributes":{"dilate":true,"fill_color":{"value":"#fdd49e"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fdd49e"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"bbaef363-8b0d-4caa-a7e5-edaae9deef24","type":"Rect"},{"attributes":{"data_source":{"id":"ccea508f-0e74-411f-8162-42fbcb6fbcd3","type":"ColumnDataSource"},"glyph":{"id":"d0d74e6d-2bdb-4ad9-8de9-f15fbaab64e3","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"6f1a7c28-06d9-4965-a0b2-55c96ebe40c2","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]","(6.7, 10]"],"chart_index":[{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"},{"POS_ARR_DELAY":"(6.7, 10]"}],"values":[7.833333333333333,9.930555555555555,9.555555555555555,9.025,8.883561643835616,7.8,8.53061224489796,9.181818181818182,8.581395348837209,6.926829268292683,7.054054054054054,8.11111111111111,8.306122448979592],"x":[9,13,6,10,13,22,7,9,9,10,10,22,10],"y":["Monday","Monday","Tuesday","Tuesday","Tuesday","Tuesday","Wednesday","Wednesday","Thursday","Thursday","Friday","Friday","Sunday"]}},"id":"ee2c1372-89a6-430d-aca9-e3761488bd5b","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"a4baf5ff-c04a-4009-bb46-70ee982d5ca8","type":"ColumnDataSource"},"glyph":{"id":"a09dcb97-4e50-4aba-bec1-81e5b497fb7f","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"1dc4a968-8abe-4f9b-82cd-535e4eab85d9","type":"GlyphRenderer"},{"attributes":{"axis_label":"Departure Hour","formatter":{"id":"2b53eed8-43b1-4fa0-a0ea-0ba70d800665","type":"BasicTickFormatter"},"plot":{"id":"6e27e32e-9abb-4a7e-a38f-80de92f6cbfe","subtype":"Chart","type":"Plot"},"ticker":{"id":"cf7c4751-1c86-454c-8e0f-ba415c2b23ed","type":"BasicTicker"}},"id":"1c8c3b8d-965e-4d21-94d6-0947afb698ee","type":"LinearAxis"},{"attributes":{"child":{"id":"6e27e32e-9abb-4a7e-a38f-80de92f6cbfe","subtype":"Chart","type":"Plot"},"title":"Overall"},"id":"587da150-07b1-4c33-a9bb-4bb8fa0f6cd1","type":"Panel"},{"attributes":{"dilate":true,"fill_color":{"value":"#b30000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#b30000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"3cc778d6-9269-46b7-8231-a5d6ed20e4c9","type":"Rect"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(13.3, 16.7]","(13.3, 16.7]","(13.3, 16.7]","(13.3, 16.7]","(13.3, 16.7]"],"chart_index":[{"POS_ARR_DELAY":"(13.3, 16.7]"},{"POS_ARR_DELAY":"(13.3, 16.7]"},{"POS_ARR_DELAY":"(13.3, 16.7]"},{"POS_ARR_DELAY":"(13.3, 16.7]"},{"POS_ARR_DELAY":"(13.3, 16.7]"}],"values":[15.869158878504672,13.5,15.214953271028037,14.277777777777779,14.0625],"x":[21,22,21,6,9],"y":["Monday","Monday","Wednesday","Thursday","Saturday"]}},"id":"d88665ae-bf07-4fc8-96a2-eb1f1bfaf8a8","type":"ColumnDataSource"},{"attributes":{},"id":"ffda3141-bc9a-41d2-8a9b-1c9f0275cc20","type":"CategoricalTickFormatter"},{"attributes":{"dilate":true,"fill_color":{"value":"#fc8d59"},"height":{"units":"data","value":0.95},"line_color":{"value":"#fc8d59"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"200ce9fd-50c1-415b-b3b3-db9a1f0969e5","type":"Rect"}],"root_ids":["dee25f5a-af61-4dc5-8720-0bb83419c316"]},"title":"Bokeh Application","version":"0.12.3"}};
                  var render_items = [{"docid":"153c6c0c-26eb-4475-9417-2ae5be243fab","elementid":"ea76672e-5ec7-493e-b4f7-15c151be8679","modelid":"dee25f5a-af61-4dc5-8720-0bb83419c316"}];
                  
                  Bokeh.embed.embed_items(docs_json, render_items);
              });
          });
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.pydata.org/bokeh/release/bokeh-0.12.3.min.css");
          Bokeh.embed.inject_css("https://cdn.pydata.org/bokeh/release/bokeh-0.12.3.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.pydata.org/bokeh/release/bokeh-widgets-0.12.3.min.css");
          Bokeh.embed.inject_css("https://cdn.pydata.org/bokeh/release/bokeh-widgets-0.12.3.min.css");
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i](window.Bokeh);
        }
        
      }
    
      if (window._bokeh_is_loading === 0) {
        console.log("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(js_urls, function() {
          console.log("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(this));
});