'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var IconBase = require('react-icon-base');

var IoIosLightbulb = function (_React$Component) {
    _inherits(IoIosLightbulb, _React$Component);

    function IoIosLightbulb() {
        _classCallCheck(this, IoIosLightbulb);

        return _possibleConstructorReturn(this, (IoIosLightbulb.__proto__ || Object.getPrototypeOf(IoIosLightbulb)).apply(this, arguments));
    }

    _createClass(IoIosLightbulb, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm31 13.5c0 2.4-1 4.6-2.3 6.5-0.9 1.2-1.8 2.2-2.5 3.5-1.8 3-1.4 5.7-1.4 6.4v0.1h-2.5v-10l2.5-5h-1.3l-2.5 5v10h-2.5v-10l-2.4-5h-1.3l2.5 5v10h-2.5v-0.1c0-0.5 0.2-3.4-1.5-6.4-0.8-1.3-1.6-2.3-2.5-3.5-1.3-1.9-2.3-4.1-2.3-6.5 0-6.1 5.2-11 11.3-11s11.2 4.9 11.2 11z m-13.7 24v-1.2h5v1.2h-5z m-1.3-2.5v-1.2h7.5v1.2h-7.5z m0-2.5v-1.2h7.5v1.2h-7.5z' })
                )
            );
        }
    }]);

    return IoIosLightbulb;
}(React.Component);

exports.default = IoIosLightbulb;
module.exports = exports['default'];