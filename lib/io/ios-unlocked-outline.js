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

var IoIosUnlockedOutline = function (_React$Component) {
    _inherits(IoIosUnlockedOutline, _React$Component);

    function IoIosUnlockedOutline() {
        _classCallCheck(this, IoIosUnlockedOutline);

        return _possibleConstructorReturn(this, (IoIosUnlockedOutline.__proto__ || Object.getPrototypeOf(IoIosUnlockedOutline)).apply(this, arguments));
    }

    _createClass(IoIosUnlockedOutline, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm20 22.5c1.4 0 2.5 1.1 2.5 2.5 0 1.2-0.8 2.1-1.9 2.4v2.6h-1.2v-2.6c-1.1-0.3-1.9-1.2-1.9-2.4 0-1.4 1.1-2.5 2.5-2.5z m0 3.8c0.7 0 1.3-0.6 1.3-1.3s-0.6-1.2-1.3-1.2-1.2 0.5-1.2 1.2 0.5 1.3 1.2 1.3z m-6.9-8.8h19.4v18.8h-25v-18.8h4.4v-5.6c0-4.5 3.6-8.1 8.1-8.1s8.1 3.6 8.1 8.1v0.6h-1.2v-0.6c0-3.9-3.1-6.9-6.9-6.9s-6.9 3-6.9 6.9v5.6z m18.2 17.5v-16.2h-22.5v16.2h22.5z' })
                )
            );
        }
    }]);

    return IoIosUnlockedOutline;
}(React.Component);

exports.default = IoIosUnlockedOutline;
module.exports = exports['default'];