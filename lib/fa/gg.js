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

var FaGg = function (_React$Component) {
    _inherits(FaGg, _React$Component);

    function FaGg() {
        _classCallCheck(this, FaGg);

        return _possibleConstructorReturn(this, (FaGg.__proto__ || Object.getPrototypeOf(FaGg)).apply(this, arguments));
    }

    _createClass(FaGg, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm14.3 18.1l7.4 7.5-7.4 7.4-13.1-13 13.1-13 3.2 3.2-1.8 1.9-1.4-1.4-9.3 9.3 9.3 9.3 3.7-3.7-5.6-5.6z m11.2-11.1l13 13-13 13-3.3-3.2 1.9-1.9 1.4 1.4 9.3-9.3-9.3-9.3-3.8 3.7 5.6 5.6-1.8 1.9-7.5-7.5z' })
                )
            );
        }
    }]);

    return FaGg;
}(React.Component);

exports.default = FaGg;
module.exports = exports['default'];