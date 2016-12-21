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

var IoIosPaper = function (_React$Component) {
    _inherits(IoIosPaper, _React$Component);

    function IoIosPaper() {
        _classCallCheck(this, IoIosPaper);

        return _possibleConstructorReturn(this, (IoIosPaper.__proto__ || Object.getPrototypeOf(IoIosPaper)).apply(this, arguments));
    }

    _createClass(IoIosPaper, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm8.8 5h26.2v27.6c0 1.3-1.1 2.4-2.4 2.4h-25.2c-1.3 0-2.4-1.1-2.4-2.4v-23.8h2.5v22.5h1.3v-26.3z m3.7 3.8v1.2h10v-1.2h-10z m0 12.5v1.2h15v-1.2h-15z m18.8 7.5v-1.3h-18.8v1.3h18.8z m0-12.5v-1.3h-18.8v1.3h18.8z' })
                )
            );
        }
    }]);

    return IoIosPaper;
}(React.Component);

exports.default = IoIosPaper;
module.exports = exports['default'];