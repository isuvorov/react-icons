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

var IoIosFolderOutline = function (_React$Component) {
    _inherits(IoIosFolderOutline, _React$Component);

    function IoIosFolderOutline() {
        _classCallCheck(this, IoIosFolderOutline);

        return _possibleConstructorReturn(this, (IoIosFolderOutline.__proto__ || Object.getPrototypeOf(IoIosFolderOutline)).apply(this, arguments));
    }

    _createClass(IoIosFolderOutline, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm33.2 7.5c1 0 1.8 0.8 1.8 1.8v23.7c0 1.1-0.8 2-1.8 2h-31.2c-1.1 0-2-0.9-2-2v-26.2c0-1 0.9-1.8 2-1.8h8.7c0.6 0 0.9 0.2 1.3 0.5l1.8 1.8c0.2 0.2 0.3 0.2 0.5 0.2h18.9z m-31.2-1.2c-0.4 0-0.7 0.2-0.7 0.5v5.8c0.2-0.1 0.3-0.1 0.6-0.1h31.2c0.3 0 0.4 0 0.7 0.1v-3.3c0-0.3-0.3-0.5-0.6-0.5h-18.9c-0.5 0-0.9-0.2-1.3-0.6l-1.8-1.8c-0.2-0.1-0.3-0.1-0.5-0.1h-8.8z m31.8 26.7v-18.6c0-0.3-0.4-0.6-0.7-0.6h-31.2c-0.3 0-0.6 0.3-0.6 0.6v18.6c0 0.4 0.3 0.8 0.7 0.8h31.2c0.3 0 0.6-0.4 0.6-0.8z' })
                )
            );
        }
    }]);

    return IoIosFolderOutline;
}(React.Component);

exports.default = IoIosFolderOutline;
module.exports = exports['default'];