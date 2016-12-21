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

var IoIpod = function (_React$Component) {
    _inherits(IoIpod, _React$Component);

    function IoIpod() {
        _classCallCheck(this, IoIpod);

        return _possibleConstructorReturn(this, (IoIpod.__proto__ || Object.getPrototypeOf(IoIpod)).apply(this, arguments));
    }

    _createClass(IoIpod, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm19.8 24.3c1.4 0 2.5 1.1 2.5 2.5s-1.1 2.5-2.5 2.5-2.5-1.1-2.5-2.5 1-2.5 2.5-2.5z m6.5-19.3c1.2 0 2.2 0.9 2.2 2.2v25.6c0 1.3-1 2.2-2.2 2.2h-13.1c-1.2 0-2.2-0.9-2.2-2.2v-25.6c0-1.3 1-2.2 2.2-2.2h13.1z m-6.5 27.5c3.1 0 5.6-2.5 5.6-5.6s-2.5-5.6-5.6-5.6-5.7 2.5-5.7 5.6 2.5 5.6 5.7 5.6z m6.2-14.8v-9.2c-0.1-0.5-0.5-0.9-0.9-1h-10.7c-0.5 0.1-0.9 0.5-0.9 1.2v8.9c0 0.6 0.5 1.1 1.1 1.1h10.2c0.7 0 1.1-0.3 1.2-1z' })
                )
            );
        }
    }]);

    return IoIpod;
}(React.Component);

exports.default = IoIpod;
module.exports = exports['default'];