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

var IoIosVideocam = function (_React$Component) {
    _inherits(IoIosVideocam, _React$Component);

    function IoIosVideocam() {
        _classCallCheck(this, IoIosVideocam);

        return _possibleConstructorReturn(this, (IoIosVideocam.__proto__ || Object.getPrototypeOf(IoIosVideocam)).apply(this, arguments));
    }

    _createClass(IoIosVideocam, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm23.6 10c1.5 0 2.6 1.1 2.6 2.6v14.7c0 1.5-1.1 2.7-2.6 2.7h-17.3c-1.5 0-2.8-1.2-2.8-2.7v-14.7c0-1.5 1.3-2.6 2.8-2.6h17.3z m4.9 6.6l7.7-4.1v15l-7.7-4.1v-6.8z' })
                )
            );
        }
    }]);

    return IoIosVideocam;
}(React.Component);

exports.default = IoIosVideocam;
module.exports = exports['default'];