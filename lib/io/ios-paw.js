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

var IoIosPaw = function (_React$Component) {
    _inherits(IoIosPaw, _React$Component);

    function IoIosPaw() {
        _classCallCheck(this, IoIosPaw);

        return _possibleConstructorReturn(this, (IoIosPaw.__proto__ || Object.getPrototypeOf(IoIosPaw)).apply(this, arguments));
    }

    _createClass(IoIosPaw, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm34.7 15.3c0.5 1.3 0.4 3-0.2 4.5-0.8 1.9-2.5 3.3-4 3.3-0.4 0-0.8-0.1-1.2-0.2-1.7-0.8-2.3-3.5-1.3-6.2 0.8-2.2 2.4-3.6 4-3.6 0.3 0 0.7 0.1 1 0.3 0.8 0.3 1.4 1 1.7 1.9z m-22.7 1.4c1 2.7 0.4 5.4-1.3 6.2-0.4 0.1-0.8 0.2-1.2 0.2-1.5 0-3.2-1.4-4-3.3-0.6-1.5-0.7-3.2-0.2-4.5 0.3-0.9 0.9-1.6 1.7-1.9 0.3-0.2 0.7-0.3 1-0.3 1.6 0 3.3 1.4 4 3.6z m3.5-0.2c-2.2-0.1-4.1-2.5-4.4-5.4-0.2-1.8 0.3-3.5 1.2-4.7 0.7-0.8 1.5-1.3 2.5-1.4h0.4c2.1 0.1 3.6 2.3 3.9 5.2 0.3 1.9 0 3.8-1 5-0.6 0.7-1.3 1.1-2.2 1.2-0.1 0-0.3 0.1-0.4 0.1z m4.5 2.3c5 0 10 5.9 10 11.6 0 1.7-0.9 3.1-1.7 3.7-1 0.7-1.8 0.9-3.3 0.9-1.8 0-2.3-0.6-3.1-1.2-0.6-0.4-1.1-0.8-1.9-0.8s-1.2 0.4-1.9 0.8c-0.8 0.6-1.3 1.2-3.1 1.2-1.5 0-2.3-0.2-3.3-0.9-0.8-0.6-1.7-2-1.7-3.7 0-5.7 5-11.6 10-11.6z m4.1-2.4c-0.9-0.1-1.6-0.5-2.2-1.2-1-1.2-1.3-3.1-1-5 0.3-2.9 1.8-5.1 3.9-5.2h0.5c0.9 0.1 1.7 0.6 2.4 1.4 0.9 1.2 1.4 2.9 1.2 4.7-0.3 2.9-2.2 5.2-4.4 5.3h-0.4z' })
                )
            );
        }
    }]);

    return IoIosPaw;
}(React.Component);

exports.default = IoIosPaw;
module.exports = exports['default'];