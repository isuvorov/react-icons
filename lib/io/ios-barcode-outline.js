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

var IoIosBarcodeOutline = function (_React$Component) {
    _inherits(IoIosBarcodeOutline, _React$Component);

    function IoIosBarcodeOutline() {
        _classCallCheck(this, IoIosBarcodeOutline);

        return _possibleConstructorReturn(this, (IoIosBarcodeOutline.__proto__ || Object.getPrototypeOf(IoIosBarcodeOutline)).apply(this, arguments));
    }

    _createClass(IoIosBarcodeOutline, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm3.5 30v-20h6.3v1.3h-5v17.5h5v1.2h-6.3z m26.3-20h6.2v20h-6.2v-1.2h5v-17.5h-5v-1.3z m-21.3 15v-10h1.3v10h-1.3z m21.3 0v-10h1.2v10h-1.2z m-5 2.5v-15h1.2v15h-1.2z m-11.3 0v-15h1.3v15h-1.3z m5.5-1.2v-12.5h1.3v12.5h-1.3z' })
                )
            );
        }
    }]);

    return IoIosBarcodeOutline;
}(React.Component);

exports.default = IoIosBarcodeOutline;
module.exports = exports['default'];