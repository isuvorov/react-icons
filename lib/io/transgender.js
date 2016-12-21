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

var IoTransgender = function (_React$Component) {
    _inherits(IoTransgender, _React$Component);

    function IoTransgender() {
        _classCallCheck(this, IoTransgender);

        return _possibleConstructorReturn(this, (IoTransgender.__proto__ || Object.getPrototypeOf(IoTransgender)).apply(this, arguments));
    }

    _createClass(IoTransgender, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm28.8 0h11.2v11.3h-3.1v-6l-7.9 7.8c0.6 1.4 1 2.8 1 4.4 0 4.9-3.6 9-8.1 9.8v4.1h5.6v3.6h-5.6v5h-3.8v-5h-5.6v-3.6h5.6v-4.1c-4.6-0.8-8.1-4.9-8.1-9.8 0-1.6 0.4-3 1-4.4l-1.7-1.7-2.8 2.8-2.6-2.6 2.8-2.8-3.6-3.5v6h-3.1v-11.3h11.3v3.1h-5.5l3.3 3.3 2.9-2.8 2.5 2.6-2.8 2.8 1.3 1.3c1.8-1.7 4.3-2.8 7-2.8 2.1 0 4.1 0.6 5.8 1.8 0 0 0.5 0.4 1.2 1l7.2-7.2h-5.5v-3.1z m-8.8 23.8c3.4 0 6.3-2.9 6.3-6.3s-2.9-6.2-6.3-6.2-6.2 2.8-6.2 6.2 2.8 6.3 6.2 6.3z' })
                )
            );
        }
    }]);

    return IoTransgender;
}(React.Component);

exports.default = IoTransgender;
module.exports = exports['default'];