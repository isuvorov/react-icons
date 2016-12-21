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

var IoIosPricetagsOutline = function (_React$Component) {
    _inherits(IoIosPricetagsOutline, _React$Component);

    function IoIosPricetagsOutline() {
        _classCallCheck(this, IoIosPricetagsOutline);

        return _possibleConstructorReturn(this, (IoIosPricetagsOutline.__proto__ || Object.getPrototypeOf(IoIosPricetagsOutline)).apply(this, arguments));
    }

    _createClass(IoIosPricetagsOutline, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm32.5 5h2.5v11.3l-18.7 21.2-2-1.9-1.8 1.9-12.5-12.5 20-22.5h12.5v2.5z m-20 30.7l0.9-0.9 0.9-1 17-19.3v-10.7h-10.8l-18.8 21.2z m21.3-20v-9.4h-1.3v8.7l-17.3 19.8 1.1 0.9z m-8.8-3.2c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5 2.5 1.1 2.5 2.5-1.1 2.5-2.5 2.5z m0-3.7c-0.7 0-1.2 0.5-1.2 1.2s0.5 1.3 1.2 1.3 1.3-0.6 1.3-1.3-0.6-1.2-1.3-1.2z' })
                )
            );
        }
    }]);

    return IoIosPricetagsOutline;
}(React.Component);

exports.default = IoIosPricetagsOutline;
module.exports = exports['default'];