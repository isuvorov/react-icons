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

var IoIosListOutline = function (_React$Component) {
    _inherits(IoIosListOutline, _React$Component);

    function IoIosListOutline() {
        _classCallCheck(this, IoIosListOutline);

        return _possibleConstructorReturn(this, (IoIosListOutline.__proto__ || Object.getPrototypeOf(IoIosListOutline)).apply(this, arguments));
    }

    _createClass(IoIosListOutline, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm33.8 6.3h-27.5v27.5h27.5v-27.5z m1.2-1.3v30h-30v-30h30z m-20 8.1v-1.2h15v1.2h-15z m0 7.5v-1.2h15v1.2h-15z m0 7.5v-1.2h15v1.2h-15z m-5-15.6c0-0.9 0.4-1.2 1.3-1.2s1.2 0.3 1.2 1.2-0.4 1.3-1.2 1.3-1.3-0.4-1.3-1.3z m0 7.5c0-0.9 0.4-1.2 1.3-1.2s1.2 0.3 1.2 1.2-0.4 1.3-1.2 1.3-1.3-0.4-1.3-1.3z m0 7.5c0-0.9 0.4-1.2 1.3-1.2s1.2 0.3 1.2 1.2-0.4 1.3-1.2 1.3-1.3-0.4-1.3-1.3z' })
                )
            );
        }
    }]);

    return IoIosListOutline;
}(React.Component);

exports.default = IoIosListOutline;
module.exports = exports['default'];