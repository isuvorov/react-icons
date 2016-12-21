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

var IoIosCog = function (_React$Component) {
    _inherits(IoIosCog, _React$Component);

    function IoIosCog() {
        _classCallCheck(this, IoIosCog);

        return _possibleConstructorReturn(this, (IoIosCog.__proto__ || Object.getPrototypeOf(IoIosCog)).apply(this, arguments));
    }

    _createClass(IoIosCog, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm22.9 11.7c1.2 0.4 2.3 1.2 3.3 2.1 1.6 1.7 2.6 3.9 2.6 6.2 0 2.1-0.8 4.2-2.2 5.8l-5.9-5.9z m-1.2-0.3l-2.2 8.1-8.1 2.2c-0.1-0.5-0.2-1.2-0.2-1.7 0-2.3 1-4.5 2.6-6.2s3.9-2.5 6.2-2.5c0.5 0 1.2 0 1.7 0.1z m-10 11.6l8.1-2.2 5.9 5.8c-1.6 1.4-3.6 2.1-5.7 2.1-2.3 0-4.5-0.9-6.2-2.5-0.9-1-1.6-2.1-2.1-3.2z m23.3-1.7l-2.6 0.7-0.2 1 2.1 1.6-0.9 2.4-2.7-0.4-0.6 0.8 1.3 2.3-1.8 1.8-2.3-1.3-0.7 0.5 0.4 2.7-2.3 0.9-1.7-2.1-1 0.2-0.7 2.6h-2.5l-0.7-2.6-1-0.2-1.6 2.2-2.3-1 0.3-2.6-0.8-0.6-2.4 1.4-1.8-1.8 1.4-2.4-0.5-0.8-2.8 0.4-0.9-2.3 2.2-1.7-0.2-1-2.7-0.7v-2.5l2.7-0.7 0.2-0.9-2.3-1.7 1-2.4 2.8 0.4 0.5-0.8-1.5-2.5 1.8-1.7 2.5 1.5 0.8-0.6-0.3-2.8 2.3-1 1.7 2.3 0.9-0.2 0.7-2.7h2.5l0.7 2.7 1 0.2 1.7-2.2 2.3 0.9-0.4 2.8 0.8 0.6 2.4-1.4 1.7 1.8-1.3 2.3 0.5 0.8 2.7-0.4 1 2.4-2.2 1.6 0.2 1 2.6 0.7v2.5z m-15 8.7c5.5 0 10-4.5 10-10s-4.5-10-10-10-10 4.5-10 10 4.5 10 10 10z' })
                )
            );
        }
    }]);

    return IoIosCog;
}(React.Component);

exports.default = IoIosCog;
module.exports = exports['default'];