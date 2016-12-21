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

var IoIosFlame = function (_React$Component) {
    _inherits(IoIosFlame, _React$Component);

    function IoIosFlame() {
        _classCallCheck(this, IoIosFlame);

        return _possibleConstructorReturn(this, (IoIosFlame.__proto__ || Object.getPrototypeOf(IoIosFlame)).apply(this, arguments));
    }

    _createClass(IoIosFlame, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm17.5 2.5c6.8 5 13.3 14 12.4 22.5-1 10.5-8.1 12.5-9.9 12.5s-9.9-3.1-10-12.5c-0.1-11.4 9.5-11.2 7.5-22.5z m2.5 34.4s3.1-2.8 3.1-6.3-3.1-6.2-3.1-6.2-3.2 2.8-3.2 6.2 3.2 6.3 3.2 6.3z' })
                )
            );
        }
    }]);

    return IoIosFlame;
}(React.Component);

exports.default = IoIosFlame;
module.exports = exports['default'];