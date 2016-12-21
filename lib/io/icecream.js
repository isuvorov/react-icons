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

var IoIcecream = function (_React$Component) {
    _inherits(IoIcecream, _React$Component);

    function IoIcecream() {
        _classCallCheck(this, IoIcecream);

        return _possibleConstructorReturn(this, (IoIcecream.__proto__ || Object.getPrototypeOf(IoIcecream)).apply(this, arguments));
    }

    _createClass(IoIcecream, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm10 20h20l-10 17.5z m21.5-6.5c0.6 0.4 1 1 1 1.8 0 1.3-1.1 2.2-2.3 2.2h-20.4c-1.2 0-2.3-1-2.3-2.2 0-0.8 0.5-1.4 1.1-1.8 0.1 0 0.1-0.1 0.1-0.1 0.4-0.3 0.6-0.6 0.7-1v-0.1c-0.2-0.4-0.2-0.9-0.2-1.4 0-3.2 2.7-5.9 6-5.9 0.6 0 1.2 0.2 1.8 0.3-0.3 1-0.4 2.4-0.4 2.4 0.2-1.1 0.9-2.2 0.9-2.2 1.4-1.8 3.6-3 6-3 4.2 0 7.5 3.4 7.5 7.5 0 0.9-0.1 1.6-0.4 2.3v0.1c0 0.3 0.3 0.7 0.6 1 0.1 0 0.2 0.1 0.3 0.1z' })
                )
            );
        }
    }]);

    return IoIcecream;
}(React.Component);

exports.default = IoIcecream;
module.exports = exports['default'];