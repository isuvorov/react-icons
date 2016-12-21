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

var IoIosUnlocked = function (_React$Component) {
    _inherits(IoIosUnlocked, _React$Component);

    function IoIosUnlocked() {
        _classCallCheck(this, IoIosUnlocked);

        return _possibleConstructorReturn(this, (IoIosUnlocked.__proto__ || Object.getPrototypeOf(IoIosUnlocked)).apply(this, arguments));
    }

    _createClass(IoIosUnlocked, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm20 23.8c0.7 0 1.3 0.5 1.3 1.2s-0.6 1.3-1.3 1.3-1.2-0.6-1.2-1.3 0.5-1.2 1.2-1.2z m-6.9-6.3h19.4v18.8h-25v-18.8h4.4v-5.6c0-4.5 3.6-8.1 8.1-8.1s8.1 3.6 8.1 8.1v0.6h-1.2v-0.6c0-3.9-3.1-6.9-6.9-6.9s-6.9 3-6.9 6.9v5.6z m7.5 9.9c1.1-0.3 1.9-1.2 1.9-2.4 0-1.4-1.1-2.5-2.5-2.5s-2.5 1.1-2.5 2.5c0 1.2 0.8 2.1 1.9 2.4v2.6h1.2v-2.6z' })
                )
            );
        }
    }]);

    return IoIosUnlocked;
}(React.Component);

exports.default = IoIosUnlocked;
module.exports = exports['default'];