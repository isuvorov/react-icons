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

var MdDirectionsBike = function (_React$Component) {
    _inherits(MdDirectionsBike, _React$Component);

    function MdDirectionsBike() {
        _classCallCheck(this, MdDirectionsBike);

        return _possibleConstructorReturn(this, (MdDirectionsBike.__proto__ || Object.getPrototypeOf(MdDirectionsBike)).apply(this, arguments));
    }

    _createClass(MdDirectionsBike, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                IconBase,
                _extends({ viewBox: '0 0 40 40' }, this.props),
                React.createElement(
                    'g',
                    null,
                    React.createElement('path', { d: 'm31.6 34.1c3.2 0 5.9-2.5 5.9-5.7s-2.7-5.9-5.9-5.9-5.7 2.7-5.7 5.9 2.5 5.7 5.7 5.7z m0-14.1c4.7 0 8.4 3.7 8.4 8.4s-3.7 8.2-8.4 8.2-8.2-3.6-8.2-8.2 3.6-8.4 8.2-8.4z m-13.6-2.5l3.6 3.8v10.3h-3.2v-8.2l-5.4-4.7c-0.7-0.5-1-1.4-1-2.4 0-0.8 0.3-1.6 1-2.3l4.7-4.7c0.4-0.7 1.3-0.9 2.3-0.9s1.8 0.2 2.7 0.9l3.2 3.2c1.4 1.5 3.4 2.5 5.9 2.5v3.4c-3.5 0-6.3-1.4-8.4-3.6l-1.4-1.3z m-9.6 16.6c3.2 0 5.7-2.5 5.7-5.7s-2.5-5.9-5.7-5.9-5.9 2.7-5.9 5.9 2.7 5.7 5.9 5.7z m0-14.1c4.7 0 8.2 3.7 8.2 8.4s-3.5 8.2-8.2 8.2-8.4-3.6-8.4-8.2 3.7-8.4 8.4-8.4z m17.5-10.9c-1.8 0-3.4-1.4-3.4-3.2s1.6-3.4 3.4-3.4 3.2 1.6 3.2 3.4-1.4 3.2-3.2 3.2z' })
                )
            );
        }
    }]);

    return MdDirectionsBike;
}(React.Component);

exports.default = MdDirectionsBike;
module.exports = exports['default'];