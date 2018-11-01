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
      };var element = document.getElementById("1f0ea019-9aff-45eb-b572-be767e5dda5b");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '1f0ea019-9aff-45eb-b572-be767e5dda5b' but no matching script tag was found. ")
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
                  var docs_json = {"b207a8de-9abf-433e-b27a-853fa07421bd":{"roots":{"references":[{"attributes":{"data_source":{"id":"b95d1161-0ae1-49f1-a15a-1c342fb015fb","type":"ColumnDataSource"},"glyph":{"id":"c3df9d79-30d7-4985-9744-639eed695a3c","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"a04f2265-9d64-4aba-9b3e-7f0483152c6d","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"27fd1e34-bca3-4f75-a68e-04e4022aad3a","subtype":"Chart","type":"Plot"}},"id":"07e56a88-a682-4042-925c-23607a11e3e2","type":"SaveTool"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(26.8, 30]"],"chart_index":[{"POS_ARR_DELAY":"(26.8, 30]"}],"values":[30.0],"x":[7],"y":["Tuesday"]}},"id":"7ef3a949-c027-47e9-9c09-291df955a90f","type":"ColumnDataSource"},{"attributes":{},"id":"ccda386c-854a-4b2d-8004-a5c8050968a2","type":"BasicTicker"},{"attributes":{"plot":null,"text":"Average Flight Delays"},"id":"71b930c6-e76e-472c-bd86-10e772f07fcd","type":"Title"},{"attributes":{},"id":"dd4a20c5-d34e-4cf2-bbaf-b7154253c0cd","type":"BasicTickFormatter"},{"attributes":{"child":{"id":"27fd1e34-bca3-4f75-a68e-04e4022aad3a","subtype":"Chart","type":"Plot"},"title":"HA"},"id":"546c4610-bd9c-491e-94c2-572a35b8ace4","type":"Panel"},{"attributes":{"callback":null,"tabs":[{"id":"a83c8192-6bb5-4465-b1a2-0d2d8e4854b0","type":"Panel"},{"id":"546c4610-bd9c-491e-94c2-572a35b8ace4","type":"Panel"}]},"id":"6b36cf86-7ca7-43ba-8fe9-ecc4c2cb8cf5","type":"Tabs"},{"attributes":{"dilate":true,"fill_color":{"value":"#ef6548"},"height":{"units":"data","value":0.95},"line_color":{"value":"#ef6548"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"f067b5b0-6c12-4797-b9e2-540fd9c24069","type":"Rect"},{"attributes":{},"id":"e6da4084-d325-4f4b-8f26-2a21eb736571","type":"BasicTicker"},{"attributes":{"dilate":true,"fill_color":{"value":"#7f0000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#7f0000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"1070468b-a30f-4b44-a2d6-84860cebfe51","type":"Rect"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"02b81ccc-44bd-40ed-b9ba-9a781b355a21","type":"PanTool"},{"id":"933a11fb-4420-4d33-a9b9-16921488c3fd","type":"WheelZoomTool"},{"id":"7e23a6e4-30af-4a02-b3e2-3e3539d0f19c","type":"BoxZoomTool"},{"id":"07e56a88-a682-4042-925c-23607a11e3e2","type":"SaveTool"},{"id":"09b0b0f6-0e21-4de5-ba20-533d33bac0a7","type":"ResetTool"},{"id":"d4d1cbde-dee1-492c-873b-994b9c1f56d5","type":"HelpTool"}]},"id":"bd2e052d-91af-4af1-81b7-2b5c1e194ad1","type":"Toolbar"},{"attributes":{"plot":{"id":"6f8acf61-5200-477d-83d3-dcd748317df9","subtype":"Chart","type":"Plot"}},"id":"5184e4c1-ab4f-405f-8b91-76025f441c7b","type":"WheelZoomTool"},{"attributes":{"data_source":{"id":"b308adbc-0f3c-4849-ae01-fc3552794cd8","type":"ColumnDataSource"},"glyph":{"id":"9df65f28-9310-4800-a341-f38ba89256b2","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"cba124ba-bf32-48a4-9b0a-5d381ea410b9","type":"GlyphRenderer"},{"attributes":{"background_fill_alpha":{"value":0.8},"below":[{"id":"1828b889-0fa7-4a8b-8c2e-c233a8b27c7b","type":"LinearAxis"}],"left":[{"id":"c6fd6a7b-eca1-4933-ad00-bca1891e1426","type":"CategoricalAxis"}],"plot_height":330,"renderers":[{"id":"cb85bed9-be29-4d1f-b2d8-2a009f32b8b0","type":"BoxAnnotation"},{"id":"81d5d33b-d7e9-4aed-9efb-5334c5955f7a","type":"GlyphRenderer"},{"id":"562ab2ec-f604-4350-8056-8f1db8007fcd","type":"GlyphRenderer"},{"id":"e18a52ca-e955-4495-b428-1888cacd71a5","type":"GlyphRenderer"},{"id":"5f8b2f22-2c27-49d2-8cf2-ca44df35144b","type":"GlyphRenderer"},{"id":"1828b889-0fa7-4a8b-8c2e-c233a8b27c7b","type":"LinearAxis"},{"id":"c6fd6a7b-eca1-4933-ad00-bca1891e1426","type":"CategoricalAxis"},{"id":"9643a86a-09f3-4be1-acd6-4fae3479cd33","type":"ColorBar"}],"right":[{"id":"9643a86a-09f3-4be1-acd6-4fae3479cd33","type":"ColorBar"}],"title":{"id":"ee6c29a8-48d4-4847-8f4b-12ea47238d99","type":"Title"},"tool_events":{"id":"757d6096-cd40-42f3-98a9-8e95fffc2e30","type":"ToolEvents"},"toolbar":{"id":"bd2e052d-91af-4af1-81b7-2b5c1e194ad1","type":"Toolbar"},"toolbar_location":"above","width":600,"x_mapper_type":"auto","x_range":{"id":"1992a0d0-de03-4159-a6e9-5e78d13784a2","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"a58b69f2-d9d1-4087-87b9-775cc56085ef","type":"FactorRange"}},"id":"27fd1e34-bca3-4f75-a68e-04e4022aad3a","subtype":"Chart","type":"Plot"},{"attributes":{"data_source":{"id":"6c5c7db7-f10c-4025-9deb-032d2494cf17","type":"ColumnDataSource"},"glyph":{"id":"f067b5b0-6c12-4797-b9e2-540fd9c24069","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"5f8b2f22-2c27-49d2-8cf2-ca44df35144b","type":"GlyphRenderer"},{"attributes":{"dilate":true,"fill_color":{"value":"#d7301f"},"height":{"units":"data","value":0.95},"line_color":{"value":"#d7301f"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"ca8b5ead-3013-4287-b42a-50d56842ab2a","type":"Rect"},{"attributes":{"axis_label":"Day of the Week","formatter":{"id":"693ed9a7-0f54-498a-867e-b12f76ddea4f","type":"CategoricalTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"6f8acf61-5200-477d-83d3-dcd748317df9","subtype":"Chart","type":"Plot"},"ticker":{"id":"90f71d72-306a-4c1e-8bf2-f64f82c99388","type":"CategoricalTicker"}},"id":"bce034ff-f7db-4e14-ad7e-4f4468e40aa3","type":"CategoricalAxis"},{"attributes":{"data_source":{"id":"7ef3a949-c027-47e9-9c09-291df955a90f","type":"ColumnDataSource"},"glyph":{"id":"1070468b-a30f-4b44-a2d6-84860cebfe51","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"81d5d33b-d7e9-4aed-9efb-5334c5955f7a","type":"GlyphRenderer"},{"attributes":{"data_source":{"id":"aee6ffab-4d02-4622-81c8-4e9ab0603e38","type":"ColumnDataSource"},"glyph":{"id":"ca8b5ead-3013-4287-b42a-50d56842ab2a","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"01116ba2-de33-4f08-9e76-0281377ea0d2","type":"GlyphRenderer"},{"attributes":{},"id":"76c4866b-5f44-48ec-b0a9-802aa97ff34f","type":"BasicTickFormatter"},{"attributes":{},"id":"693ed9a7-0f54-498a-867e-b12f76ddea4f","type":"CategoricalTickFormatter"},{"attributes":{},"id":"0272d597-be5d-4c40-ab66-9b2ce2aff80e","type":"BasicTicker"},{"attributes":{},"id":"859997d3-9517-475c-9180-68659971e5ee","type":"CategoricalTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"cb85bed9-be29-4d1f-b2d8-2a009f32b8b0","type":"BoxAnnotation"},{"attributes":{"high":30,"low":0,"palette":["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"]},"id":"adc672d5-1dba-4264-93df-b704d1696837","type":"LinearColorMapper"},{"attributes":{"dilate":true,"fill_color":{"value":"#d7301f"},"height":{"units":"data","value":0.95},"line_color":{"value":"#d7301f"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"6bb6389b-e0cd-4f69-a257-bb0b04884365","type":"Rect"},{"attributes":{"axis_label":"Departure Hour","formatter":{"id":"2dcc9792-e62a-45da-8d9c-3cd5b89c7614","type":"BasicTickFormatter"},"plot":{"id":"6f8acf61-5200-477d-83d3-dcd748317df9","subtype":"Chart","type":"Plot"},"ticker":{"id":"0272d597-be5d-4c40-ab66-9b2ce2aff80e","type":"BasicTicker"}},"id":"e76fe7f3-f396-4397-97f3-d296496b6198","type":"LinearAxis"},{"attributes":{"callback":null,"end":23},"id":"e498ad9e-8888-400e-a629-3f0f524b1cd4","type":"Range1d"},{"attributes":{"dilate":true,"fill_color":{"value":"#b30000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#b30000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"0de906d7-5f32-4fd4-b056-a3b95a156dae","type":"Rect"},{"attributes":{"dilate":true,"fill_color":{"value":"#ef6548"},"height":{"units":"data","value":0.95},"line_color":{"value":"#ef6548"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"c3df9d79-30d7-4985-9744-639eed695a3c","type":"Rect"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(7.5, 10.7]","(7.5, 10.7]"],"chart_index":[{"POS_ARR_DELAY":"(7.5, 10.7]"},{"POS_ARR_DELAY":"(7.5, 10.7]"}],"values":[9.519607843137255,7.698717948717949],"x":[15,7],"y":["Monday","Friday"]}},"id":"98445535-1d2f-48bf-b90b-220495ac15bc","type":"ColumnDataSource"},{"attributes":{"color_mapper":{"id":"adc672d5-1dba-4264-93df-b704d1696837","type":"LinearColorMapper"},"formatter":{"id":"76c4866b-5f44-48ec-b0a9-802aa97ff34f","type":"BasicTickFormatter"},"label_standoff":12,"location":[0,0],"plot":{"id":"6f8acf61-5200-477d-83d3-dcd748317df9","subtype":"Chart","type":"Plot"},"ticker":{"id":"49bc8fbd-194c-4df0-8bbb-229d5454715a","type":"BasicTicker"}},"id":"258133d8-0cf9-4177-af80-c00b607b477b","type":"ColorBar"},{"attributes":{"plot":{"id":"27fd1e34-bca3-4f75-a68e-04e4022aad3a","subtype":"Chart","type":"Plot"}},"id":"933a11fb-4420-4d33-a9b9-16921488c3fd","type":"WheelZoomTool"},{"attributes":{"data_source":{"id":"e9fb6d92-e8bf-4884-b1ac-46d6d2dff805","type":"ColumnDataSource"},"glyph":{"id":"0d8e3c7d-adb0-42cf-89a9-f4fb76559d4d","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"5d173e7b-7aae-40b9-a8d9-7d5e9c9fbb25","type":"GlyphRenderer"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["[1.03, 4.3]","[1.03, 4.3]","[1.03, 4.3]","[1.03, 4.3]","[1.03, 4.3]","[1.03, 4.3]"],"chart_index":[{"POS_ARR_DELAY":"[1.03, 4.3]"},{"POS_ARR_DELAY":"[1.03, 4.3]"},{"POS_ARR_DELAY":"[1.03, 4.3]"},{"POS_ARR_DELAY":"[1.03, 4.3]"},{"POS_ARR_DELAY":"[1.03, 4.3]"},{"POS_ARR_DELAY":"[1.03, 4.3]"}],"values":[4.163636363636364,1.0545454545454545,3.050955414012739,1.5740740740740742,3.6474358974358974,3.484076433121019],"x":[16,16,22,16,22,7],"y":["Monday","Tuesday","Tuesday","Thursday","Thursday","Sunday"]}},"id":"b95d1161-0ae1-49f1-a15a-1c342fb015fb","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"98445535-1d2f-48bf-b90b-220495ac15bc","type":"ColumnDataSource"},"glyph":{"id":"0de906d7-5f32-4fd4-b056-a3b95a156dae","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"562ab2ec-f604-4350-8056-8f1db8007fcd","type":"GlyphRenderer"},{"attributes":{"color_mapper":{"id":"c6218640-f2a1-412c-b551-b4dcacdc6bf9","type":"LinearColorMapper"},"formatter":{"id":"ea8f6ce2-6787-461b-a25c-250dd3ed8c8e","type":"BasicTickFormatter"},"label_standoff":12,"location":[0,0],"plot":{"id":"27fd1e34-bca3-4f75-a68e-04e4022aad3a","subtype":"Chart","type":"Plot"},"ticker":{"id":"e6da4084-d325-4f4b-8f26-2a21eb736571","type":"BasicTicker"}},"id":"9643a86a-09f3-4be1-acd6-4fae3479cd33","type":"ColorBar"},{"attributes":{"background_fill_alpha":{"value":0.8},"below":[{"id":"e76fe7f3-f396-4397-97f3-d296496b6198","type":"LinearAxis"}],"left":[{"id":"bce034ff-f7db-4e14-ad7e-4f4468e40aa3","type":"CategoricalAxis"}],"plot_height":330,"renderers":[{"id":"99bd40d1-ecb4-4734-ba17-3c7cf289a0d5","type":"BoxAnnotation"},{"id":"cba124ba-bf32-48a4-9b0a-5d381ea410b9","type":"GlyphRenderer"},{"id":"5d173e7b-7aae-40b9-a8d9-7d5e9c9fbb25","type":"GlyphRenderer"},{"id":"01116ba2-de33-4f08-9e76-0281377ea0d2","type":"GlyphRenderer"},{"id":"a04f2265-9d64-4aba-9b3e-7f0483152c6d","type":"GlyphRenderer"},{"id":"e76fe7f3-f396-4397-97f3-d296496b6198","type":"LinearAxis"},{"id":"bce034ff-f7db-4e14-ad7e-4f4468e40aa3","type":"CategoricalAxis"},{"id":"258133d8-0cf9-4177-af80-c00b607b477b","type":"ColorBar"}],"right":[{"id":"258133d8-0cf9-4177-af80-c00b607b477b","type":"ColorBar"}],"title":{"id":"71b930c6-e76e-472c-bd86-10e772f07fcd","type":"Title"},"tool_events":{"id":"b7282fbc-bbc4-4893-bafb-90e6a87ae669","type":"ToolEvents"},"toolbar":{"id":"ea623eb5-69f7-4580-b24f-a40de9919436","type":"Toolbar"},"toolbar_location":"above","width":600,"x_mapper_type":"auto","x_range":{"id":"e498ad9e-8888-400e-a629-3f0f524b1cd4","type":"Range1d"},"y_mapper_type":"auto","y_range":{"id":"472c61d5-93a1-4267-975c-112dad0f6df1","type":"FactorRange"}},"id":"6f8acf61-5200-477d-83d3-dcd748317df9","subtype":"Chart","type":"Plot"},{"attributes":{},"id":"8db367f0-040d-47fc-8f70-81aa51bf2bf7","type":"CategoricalTicker"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"4fe16fc8-934b-48f5-a21a-794067e14226","type":"PanTool"},{"id":"5184e4c1-ab4f-405f-8b91-76025f441c7b","type":"WheelZoomTool"},{"id":"1420a5fe-4d50-4852-84cd-80828c633a1e","type":"BoxZoomTool"},{"id":"05b76a89-a919-4cae-af07-6b820667b848","type":"SaveTool"},{"id":"a0be31f5-6285-403c-9d7a-ac59728e46e0","type":"ResetTool"},{"id":"0e859267-bbba-4084-a1f1-6e131b559c18","type":"HelpTool"}]},"id":"ea623eb5-69f7-4580-b24f-a40de9919436","type":"Toolbar"},{"attributes":{"axis_label":"Day of the Week","formatter":{"id":"859997d3-9517-475c-9180-68659971e5ee","type":"CategoricalTickFormatter"},"major_label_orientation":0.7853981633974483,"plot":{"id":"27fd1e34-bca3-4f75-a68e-04e4022aad3a","subtype":"Chart","type":"Plot"},"ticker":{"id":"8db367f0-040d-47fc-8f70-81aa51bf2bf7","type":"CategoricalTicker"}},"id":"c6fd6a7b-eca1-4933-ad00-bca1891e1426","type":"CategoricalAxis"},{"attributes":{"axis_label":"Departure Hour","formatter":{"id":"dd4a20c5-d34e-4cf2-bbaf-b7154253c0cd","type":"BasicTickFormatter"},"plot":{"id":"27fd1e34-bca3-4f75-a68e-04e4022aad3a","subtype":"Chart","type":"Plot"},"ticker":{"id":"ccda386c-854a-4b2d-8004-a5c8050968a2","type":"BasicTicker"}},"id":"1828b889-0fa7-4a8b-8c2e-c233a8b27c7b","type":"LinearAxis"},{"attributes":{},"id":"2dcc9792-e62a-45da-8d9c-3cd5b89c7614","type":"BasicTickFormatter"},{"attributes":{},"id":"b7282fbc-bbc4-4893-bafb-90e6a87ae669","type":"ToolEvents"},{"attributes":{"callback":null,"factors":["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]},"id":"a58b69f2-d9d1-4087-87b9-775cc56085ef","type":"FactorRange"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"99bd40d1-ecb4-4734-ba17-3c7cf289a0d5","type":"BoxAnnotation"},{"attributes":{},"id":"757d6096-cd40-42f3-98a9-8e95fffc2e30","type":"ToolEvents"},{"attributes":{"plot":{"id":"27fd1e34-bca3-4f75-a68e-04e4022aad3a","subtype":"Chart","type":"Plot"}},"id":"d4d1cbde-dee1-492c-873b-994b9c1f56d5","type":"HelpTool"},{"attributes":{"overlay":{"id":"99bd40d1-ecb4-4734-ba17-3c7cf289a0d5","type":"BoxAnnotation"},"plot":{"id":"6f8acf61-5200-477d-83d3-dcd748317df9","subtype":"Chart","type":"Plot"}},"id":"1420a5fe-4d50-4852-84cd-80828c633a1e","type":"BoxZoomTool"},{"attributes":{"callback":null,"factors":["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]},"id":"472c61d5-93a1-4267-975c-112dad0f6df1","type":"FactorRange"},{"attributes":{"plot":{"id":"6f8acf61-5200-477d-83d3-dcd748317df9","subtype":"Chart","type":"Plot"}},"id":"a0be31f5-6285-403c-9d7a-ac59728e46e0","type":"ResetTool"},{"attributes":{"data_source":{"id":"efcd9452-06b5-4644-a7f2-deccd492f7f8","type":"ColumnDataSource"},"glyph":{"id":"6bb6389b-e0cd-4f69-a257-bb0b04884365","type":"Rect"},"hover_glyph":null,"nonselection_glyph":null,"selection_glyph":null},"id":"e18a52ca-e955-4495-b428-1888cacd71a5","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"6f8acf61-5200-477d-83d3-dcd748317df9","subtype":"Chart","type":"Plot"}},"id":"4fe16fc8-934b-48f5-a21a-794067e14226","type":"PanTool"},{"attributes":{"callback":null,"end":23},"id":"1992a0d0-de03-4159-a6e9-5e78d13784a2","type":"Range1d"},{"attributes":{"high":30,"low":0,"palette":["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"]},"id":"c6218640-f2a1-412c-b551-b4dcacdc6bf9","type":"LinearColorMapper"},{"attributes":{"overlay":{"id":"cb85bed9-be29-4d1f-b2d8-2a009f32b8b0","type":"BoxAnnotation"},"plot":{"id":"27fd1e34-bca3-4f75-a68e-04e4022aad3a","subtype":"Chart","type":"Plot"}},"id":"7e23a6e4-30af-4a02-b3e2-3e3539d0f19c","type":"BoxZoomTool"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(26.8, 30]"],"chart_index":[{"POS_ARR_DELAY":"(26.8, 30]"}],"values":[30.0],"x":[7],"y":["Tuesday"]}},"id":"b308adbc-0f3c-4849-ae01-fc3552794cd8","type":"ColumnDataSource"},{"attributes":{},"id":"90f71d72-306a-4c1e-8bf2-f64f82c99388","type":"CategoricalTicker"},{"attributes":{},"id":"ea8f6ce2-6787-461b-a25c-250dd3ed8c8e","type":"BasicTickFormatter"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(4.3, 7.5]","(4.3, 7.5]","(4.3, 7.5]","(4.3, 7.5]","(4.3, 7.5]","(4.3, 7.5]","(4.3, 7.5]","(4.3, 7.5]","(4.3, 7.5]","(4.3, 7.5]","(4.3, 7.5]","(4.3, 7.5]","(4.3, 7.5]","(4.3, 7.5]","(4.3, 7.5]","(4.3, 7.5]"],"chart_index":[{"POS_ARR_DELAY":"(4.3, 7.5]"},{"POS_ARR_DELAY":"(4.3, 7.5]"},{"POS_ARR_DELAY":"(4.3, 7.5]"},{"POS_ARR_DELAY":"(4.3, 7.5]"},{"POS_ARR_DELAY":"(4.3, 7.5]"},{"POS_ARR_DELAY":"(4.3, 7.5]"},{"POS_ARR_DELAY":"(4.3, 7.5]"},{"POS_ARR_DELAY":"(4.3, 7.5]"},{"POS_ARR_DELAY":"(4.3, 7.5]"},{"POS_ARR_DELAY":"(4.3, 7.5]"},{"POS_ARR_DELAY":"(4.3, 7.5]"},{"POS_ARR_DELAY":"(4.3, 7.5]"},{"POS_ARR_DELAY":"(4.3, 7.5]"},{"POS_ARR_DELAY":"(4.3, 7.5]"},{"POS_ARR_DELAY":"(4.3, 7.5]"},{"POS_ARR_DELAY":"(4.3, 7.5]"}],"values":[5.401273885350318,6.4411764705882355,7.312101910828026,6.686274509803922,4.4363636363636365,5.378205128205129,5.29,5.871287128712871,6.3090909090909095,5.851612903225806,4.5049504950495045,4.327272727272727,5.703225806451613,4.46078431372549,6.036363636363636,6.751592356687898],"x":[22,15,7,15,16,22,15,15,16,22,15,16,22,15,16,22],"y":["Monday","Tuesday","Wednesday","Wednesday","Wednesday","Wednesday","Thursday","Friday","Friday","Friday","Saturday","Saturday","Saturday","Sunday","Sunday","Sunday"]}},"id":"aee6ffab-4d02-4622-81c8-4e9ab0603e38","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"6f8acf61-5200-477d-83d3-dcd748317df9","subtype":"Chart","type":"Plot"}},"id":"0e859267-bbba-4084-a1f1-6e131b559c18","type":"HelpTool"},{"attributes":{"dilate":true,"fill_color":{"value":"#7f0000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#7f0000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"9df65f28-9310-4800-a341-f38ba89256b2","type":"Rect"},{"attributes":{"dilate":true,"fill_color":{"value":"#b30000"},"height":{"units":"data","value":0.95},"line_color":{"value":"#b30000"},"width":{"units":"data","value":0.95},"x":{"field":"x"},"y":{"field":"y"}},"id":"0d8e3c7d-adb0-42cf-89a9-f4fb76559d4d","type":"Rect"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(7.5, 10.7]","(7.5, 10.7]"],"chart_index":[{"POS_ARR_DELAY":"(7.5, 10.7]"},{"POS_ARR_DELAY":"(7.5, 10.7]"}],"values":[9.519607843137255,7.698717948717949],"x":[15,7],"y":["Monday","Friday"]}},"id":"e9fb6d92-e8bf-4884-b1ac-46d6d2dff805","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"27fd1e34-bca3-4f75-a68e-04e4022aad3a","subtype":"Chart","type":"Plot"}},"id":"02b81ccc-44bd-40ed-b9ba-9a781b355a21","type":"PanTool"},{"attributes":{"plot":null,"text":"Hawaiian Airlines "},"id":"ee6c29a8-48d4-4847-8f4b-12ea47238d99","type":"Title"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["[1.03, 4.3]","[1.03, 4.3]","[1.03, 4.3]","[1.03, 4.3]","[1.03, 4.3]","[1.03, 4.3]"],"chart_index":[{"POS_ARR_DELAY":"[1.03, 4.3]"},{"POS_ARR_DELAY":"[1.03, 4.3]"},{"POS_ARR_DELAY":"[1.03, 4.3]"},{"POS_ARR_DELAY":"[1.03, 4.3]"},{"POS_ARR_DELAY":"[1.03, 4.3]"},{"POS_ARR_DELAY":"[1.03, 4.3]"}],"values":[4.163636363636364,1.0545454545454545,3.050955414012739,1.5740740740740742,3.6474358974358974,3.484076433121019],"x":[16,16,22,16,22,7],"y":["Monday","Tuesday","Tuesday","Thursday","Thursday","Sunday"]}},"id":"6c5c7db7-f10c-4025-9deb-032d2494cf17","type":"ColumnDataSource"},{"attributes":{"plot":{"id":"6f8acf61-5200-477d-83d3-dcd748317df9","subtype":"Chart","type":"Plot"}},"id":"05b76a89-a919-4cae-af07-6b820667b848","type":"SaveTool"},{"attributes":{"callback":null,"column_names":["y","x","values"],"data":{"POS_ARR_DELAY":["(4.3, 7.5]","(4.3, 7.5]","(4.3, 7.5]","(4.3, 7.5]","(4.3, 7.5]","(4.3, 7.5]","(4.3, 7.5]","(4.3, 7.5]","(4.3, 7.5]","(4.3, 7.5]","(4.3, 7.5]","(4.3, 7.5]","(4.3, 7.5]","(4.3, 7.5]","(4.3, 7.5]","(4.3, 7.5]"],"chart_index":[{"POS_ARR_DELAY":"(4.3, 7.5]"},{"POS_ARR_DELAY":"(4.3, 7.5]"},{"POS_ARR_DELAY":"(4.3, 7.5]"},{"POS_ARR_DELAY":"(4.3, 7.5]"},{"POS_ARR_DELAY":"(4.3, 7.5]"},{"POS_ARR_DELAY":"(4.3, 7.5]"},{"POS_ARR_DELAY":"(4.3, 7.5]"},{"POS_ARR_DELAY":"(4.3, 7.5]"},{"POS_ARR_DELAY":"(4.3, 7.5]"},{"POS_ARR_DELAY":"(4.3, 7.5]"},{"POS_ARR_DELAY":"(4.3, 7.5]"},{"POS_ARR_DELAY":"(4.3, 7.5]"},{"POS_ARR_DELAY":"(4.3, 7.5]"},{"POS_ARR_DELAY":"(4.3, 7.5]"},{"POS_ARR_DELAY":"(4.3, 7.5]"},{"POS_ARR_DELAY":"(4.3, 7.5]"}],"values":[5.401273885350318,6.4411764705882355,7.312101910828026,6.686274509803922,4.4363636363636365,5.378205128205129,5.29,5.871287128712871,6.3090909090909095,5.851612903225806,4.5049504950495045,4.327272727272727,5.703225806451613,4.46078431372549,6.036363636363636,6.751592356687898],"x":[22,15,7,15,16,22,15,15,16,22,15,16,22,15,16,22],"y":["Monday","Tuesday","Wednesday","Wednesday","Wednesday","Wednesday","Thursday","Friday","Friday","Friday","Saturday","Saturday","Saturday","Sunday","Sunday","Sunday"]}},"id":"efcd9452-06b5-4644-a7f2-deccd492f7f8","type":"ColumnDataSource"},{"attributes":{"child":{"id":"6f8acf61-5200-477d-83d3-dcd748317df9","subtype":"Chart","type":"Plot"},"title":"Overall"},"id":"a83c8192-6bb5-4465-b1a2-0d2d8e4854b0","type":"Panel"},{"attributes":{"plot":{"id":"27fd1e34-bca3-4f75-a68e-04e4022aad3a","subtype":"Chart","type":"Plot"}},"id":"09b0b0f6-0e21-4de5-ba20-533d33bac0a7","type":"ResetTool"},{"attributes":{},"id":"49bc8fbd-194c-4df0-8bbb-229d5454715a","type":"BasicTicker"}],"root_ids":["6b36cf86-7ca7-43ba-8fe9-ecc4c2cb8cf5"]},"title":"Bokeh Application","version":"0.12.3"}};
                  var render_items = [{"docid":"b207a8de-9abf-433e-b27a-853fa07421bd","elementid":"1f0ea019-9aff-45eb-b572-be767e5dda5b","modelid":"6b36cf86-7ca7-43ba-8fe9-ecc4c2cb8cf5"}];
                  
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