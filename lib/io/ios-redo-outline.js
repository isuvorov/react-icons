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

var IoIosRedoOutline = function (_React$Component) {
    _inherits(IoIosRedoOutline, _React$Component);

    function IoIosRedoOutline() {
        _classCallCheck(this, IoIosRedoOutline);

        return _possibleConstructorReturn(this, (IoIosRedoOutline.__proto__ || Object.getPrototypeOf(IoIosRedoOutline)).apply(this, arguments));
    }

    _createClass(IoIosRedoOutline, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm5 31.3v-2.5c0-1.4-0.2-6.5 3.8-10.7 2.8-2.8 6.3-4.1 11.2-4.3v-6.3l15 10-15 10v-6.2c-3.1 0-4.9 0.7-6.8 1.5-2.4 1.1-4.3 3.5-5.9 6l-1.5 2.5h-0.8z m16.3-16.3c-15.8 0-15 13.2-15 13.2 3.7-6.3 7.8-8.2 15-8.2v5.1l11.5-7.6-11.5-7.6v5.1z' })
                )
            );
        }
    }]);

    return IoIosRedoOutline;
}(React.Component);

exports.default = IoIosRedoOutline;
module.exports = exports['default'];