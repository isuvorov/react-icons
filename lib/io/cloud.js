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

var IoCloud = function (_React$Component) {
    _inherits(IoCloud, _React$Component);

    function IoCloud() {
        _classCallCheck(this, IoCloud);

        return _possibleConstructorReturn(this, (IoCloud.__proto__ || Object.getPrototypeOf(IoCloud)).apply(this, arguments));
    }

    _createClass(IoCloud, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm28.6 18.2c3.5 0 6.4 3 6.4 6.6s-2.9 6.5-6.4 6.5h-21.6c-3.8 0-7-3.3-7-7.2 0-3.1 2-5.7 4.8-6.7 0.4-2.2 2.2-4 4.6-4 0.8 0 1.4 0.3 2 0.6 1.5-3.1 4.6-5.2 8.2-5.2 5 0 9 4.1 9 9.2v0.2z' })
                )
            );
        }
    }]);

    return IoCloud;
}(React.Component);

exports.default = IoCloud;
module.exports = exports['default'];