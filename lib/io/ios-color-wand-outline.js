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

var IoIosColorWandOutline = function (_React$Component) {
    _inherits(IoIosColorWandOutline, _React$Component);

    function IoIosColorWandOutline() {
        _classCallCheck(this, IoIosColorWandOutline);

        return _possibleConstructorReturn(this, (IoIosColorWandOutline.__proto__ || Object.getPrototypeOf(IoIosColorWandOutline)).apply(this, arguments));
    }

    _createClass(IoIosColorWandOutline, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm15 11.7l20 20-2.7 2.7-20-20z m1.6 5.2l15.7 15.7 0.9-0.9-15.7-15.8z m-2.2-8.8v-3.1h1.2v3.1h-1.2z m0 16v-3.2h1.2v3.2h-1.2z m7.5-9.1v-1.2h3.1v1.2h-3.1z m-16.9 0v-1.2h3.1v1.2h-3.1z m3.7-7.7l2.2 2.3-0.9 0.9-2.2-2.2z m2.2 12.2l-2.2 2.2-0.9-0.8 2.2-2.2z m11.3-11.2l-2.2 2.2-0.9-0.9 2.2-2.3z' })
                )
            );
        }
    }]);

    return IoIosColorWandOutline;
}(React.Component);

exports.default = IoIosColorWandOutline;
module.exports = exports['default'];