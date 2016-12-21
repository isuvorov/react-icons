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

var TiWarning = function (_React$Component) {
    _inherits(TiWarning, _React$Component);

    function TiWarning() {
        _classCallCheck(this, TiWarning);

        return _possibleConstructorReturn(this, (TiWarning.__proto__ || Object.getPrototypeOf(TiWarning)).apply(this, arguments));
    }

    _createClass(TiWarning, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm35.3 25.7l-9.9-16.5c-1.3-2.1-3.2-3.3-5.4-3.3s-4.1 1.2-5.4 3.3l-9.9 16.5c-1.3 2.1-1.4 4.5-0.4 6.3 1.1 1.9 3.2 3 5.7 3h20c2.5 0 4.6-1.1 5.7-3 1-1.8 0.9-4.2-0.4-6.3z m-15.3 3.5c-1.4 0-2.6-1.1-2.6-2.5 0-1.5 1.2-2.6 2.6-2.6s2.6 1.1 2.6 2.6c0 1.4-1.2 2.5-2.6 2.5z m2.7-12.3c0 0-2.3 5.8-2.3 5.8-0.1 0.1-0.2 0.2-0.4 0.2s-0.3-0.1-0.4-0.2l-2.3-5.8c-0.2-0.4-0.2-0.7-0.2-1.1 0-1.6 1.3-2.9 2.9-2.9s2.9 1.3 2.9 2.9c0 0.4 0 0.7-0.2 1.1z' })
                )
            );
        }
    }]);

    return TiWarning;
}(React.Component);

exports.default = TiWarning;
module.exports = exports['default'];