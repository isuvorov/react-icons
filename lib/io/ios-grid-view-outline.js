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

var IoIosGridViewOutline = function (_React$Component) {
    _inherits(IoIosGridViewOutline, _React$Component);

    function IoIosGridViewOutline() {
        _classCallCheck(this, IoIosGridViewOutline);

        return _possibleConstructorReturn(this, (IoIosGridViewOutline.__proto__ || Object.getPrototypeOf(IoIosGridViewOutline)).apply(this, arguments));
    }

    _createClass(IoIosGridViewOutline, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm35 15h-8.7v10h8.7v1.3h-8.7v8.7h-1.3v-8.7h-10v8.7h-1.2v-8.7h-8.8v-1.3h8.8v-10h-8.8v-1.2h8.8v-8.8h1.2v8.8h10v-8.8h1.3v8.8h8.7v1.2z m-10 10v-10h-10v10h10z' })
                )
            );
        }
    }]);

    return IoIosGridViewOutline;
}(React.Component);

exports.default = IoIosGridViewOutline;
module.exports = exports['default'];