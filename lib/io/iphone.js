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

var IoIphone = function (_React$Component) {
    _inherits(IoIphone, _React$Component);

    function IoIphone() {
        _classCallCheck(this, IoIphone);

        return _possibleConstructorReturn(this, (IoIphone.__proto__ || Object.getPrototypeOf(IoIphone)).apply(this, arguments));
    }

    _createClass(IoIphone, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm25.6 5c1 0 1.9 0.9 1.9 1.9v26.2c0 1-0.9 1.9-1.9 1.9h-11.2c-1 0-1.9-0.9-1.9-1.9v-26.2c0-1 0.9-1.9 1.9-1.9h11.2z m-6.8 2.8c0 0.2 0.1 0.3 0.3 0.3h1.8c0.2 0 0.4-0.1 0.4-0.3 0-0.1-0.2-0.3-0.4-0.3h-1.8c-0.2 0-0.3 0.2-0.3 0.3z m-1-0.3c-0.1 0-0.3 0.2-0.3 0.3s0.2 0.3 0.3 0.3 0.3-0.1 0.3-0.3-0.1-0.3-0.3-0.3z m2.2 26.3c0.7 0 1.3-0.6 1.3-1.3s-0.6-1.2-1.3-1.2-1.2 0.5-1.2 1.2 0.5 1.3 1.2 1.3z m6.3-3.8v-20h-12.5v20h12.5z' })
                )
            );
        }
    }]);

    return IoIphone;
}(React.Component);

exports.default = IoIphone;
module.exports = exports['default'];