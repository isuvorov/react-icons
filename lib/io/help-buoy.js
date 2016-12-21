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

var IoHelpBuoy = function (_React$Component) {
    _inherits(IoHelpBuoy, _React$Component);

    function IoHelpBuoy() {
        _classCallCheck(this, IoHelpBuoy);

        return _possibleConstructorReturn(this, (IoHelpBuoy.__proto__ || Object.getPrototypeOf(IoHelpBuoy)).apply(this, arguments));
    }

    _createClass(IoHelpBuoy, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm17.5 2.5c9.7 0 17.5 7.8 17.5 17.5s-7.8 17.5-17.5 17.5-17.5-7.8-17.5-17.5 7.8-17.5 17.5-17.5z m13.9 11.9c-0.8-1.9-1.8-3.5-3.3-5s-3.2-2.5-5.1-3.3l-1.4 4.8c1.1 0.4 2.1 1.1 2.9 2s1.7 1.9 2.1 3z m-13.9 13.1c4.1 0 7.5-3.4 7.5-7.5s-3.4-7.5-7.5-7.5-7.5 3.4-7.5 7.5 3.4 7.5 7.5 7.5z m-10.6-18.1c-1.5 1.5-2.5 3.2-3.3 5.1l4.8 1.4c0.4-1.1 1.1-2.1 2-2.9s1.9-1.7 3-2.1l-1.5-4.8c-1.9 0.8-3.5 1.8-5 3.3z m-3.3 16.2c0.8 1.9 1.8 3.5 3.3 5s3.2 2.5 5.1 3.3l1.4-4.8c-1.1-0.4-2.1-1.1-2.9-2s-1.7-1.9-2.1-3z m24.5 5c1.5-1.5 2.5-3.2 3.3-5.1l-4.8-1.4c-0.4 1.1-1.1 2.1-2 2.9s-1.9 1.7-3 2.1l1.5 4.8c1.9-0.8 3.5-1.8 5-3.3z' })
                )
            );
        }
    }]);

    return IoHelpBuoy;
}(React.Component);

exports.default = IoHelpBuoy;
module.exports = exports['default'];